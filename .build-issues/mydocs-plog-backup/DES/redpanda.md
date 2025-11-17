# RedPanda Example

## Installation

```shell
brew install redpanda-data/tap/redpanda
rpk cloud login
rpk topic consume hello-world
```

## Node.js Sample

```shell
# Create and enter the project folder
cd /Users/bulent/git-repos
mkdir redpanda-node; cd redpanda-node
# Generate package.json (the default values are fine)
npm init
# Install required dependencies
npm i -D typescript
npm i -D @types/node
npm i kafkajs
# Generate tsconfig.json
tsc --init
```

```shell
# Create the topic
tsc admin.ts && node admin.js
# Produce some data
tsc producer.ts && node producer.js
# Consume it back
tsc consumer.ts && node consumer.js
```

Running version : <https://github.com/bbmorten/redpanda-node.git>
