#  KESTRA

- Run and try

```shell
docker run --pull=always --rm -it -p 8080:8080 --user=root \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp:/tmp kestra/kestra:latest-full server local
```

## Example Flow monitor-web

```yaml title='monitor-web'
id: monitor-web
namespace: monitoring
tasks:
  - id: pythonscript
    type: io.kestra.plugin.scripts.python.Script
    script: |
      import requests

      response = requests.get('https://google.com')
      print(response.status_code)
    beforeCommands:
        - pip install requests

```

##  Example Flow welcome

```yaml title='Flow welcome'
# Flow declaration with a mandatory unique ID, a namespace, and an optional description.
# Flow ID must be unique within a namespace.
id: welcome
namespace: company.team
description: Welcome to Kestra!

# Flow inputs: each input has an id, a type, and an optional default value.
inputs:
  # We define one input of name 'user' with a default value 'Kestra user'
- id: user
  type: STRING
  defaults: Kestra user

# List of tasks that will be executed one after the other.
# Each task must have an identifier unique for the flow and a type.
# Check the task documentation for a full list of attributes.
tasks:

  # This task logs a message to the terminal.
  # The message is passed using the 'format' attribute.
  # We use Pebble expressions defined with curly brackets to access the input variables.
- id: hello
  type: io.kestra.core.tasks.log.Log
  message: Hey there, {{ inputs.user }}!

  # This task extracts data from an API.
- id: api
  type: io.kestra.plugin.fs.http.Request
  uri: https://dummyjson.com/products

  # This task runs a Python script.
- id: python
  type: io.kestra.plugin.scripts.python.Script
  docker:
    image: python:slim
  beforeCommands:
    - pip install polars
  warningOnStdErr: false
  script: |
    import polars as pl
    data = {{outputs.api.body | jq('.products') | first}}
    df = pl.from_dicts(data)
    df.glimpse()
    df.select(["brand", "price"]).write_csv("{{outputDir}}/products.csv")

  # Run a DuckDB query.
- id: sqlQuery
  type: io.kestra.plugin.jdbc.duckdb.Query
  inputFiles:
    in.csv: "{{ outputs.python.outputFiles['products.csv'] }}"
  sql: |
    SELECT brand, round(avg(price), 2) as avg_price
    FROM read_csv_auto('{{workingDir}}/in.csv', header=True)
    GROUP BY brand
    ORDER BY avg_price DESC;
  store: true

 # To run the flow in an automated fashion, add one or more 'triggers'.
triggers:
  # Here we use the 'Schedule' trigger to run the flow every minute.
- id: everyMinute
  type: io.kestra.core.models.triggers.types.Schedule
  cron: "*/1 * * * *"
  inputs:
    name: Kestra pro user

```
