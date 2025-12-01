#  Chrome Dev Tools

- Close all chrome instances
- Run in debug mode

```shell
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/Users/bulent/chrome-debug-profile
```

- open `http://localhost:9222` in another Chrome window

##  Adding Chrome Dev Tools MCP to VS Code

```shell
code ~/.claude.json
```

- Find under projects `chrome-dev-tools`
- Add the following to the `projects` array:

```json
    "/Users/bulent/git-repos/elearning/oreilly-courses/react/bank_transactions_app": {
      "allowedTools": [],
      "mcpContextUris": [],
      "mcpServers": {
        "context7": {
          "type": "http",
          "url": "https://mcp.context7.com/mcp"
        },
        "chrome-devtools": {
          "command": "npx",
          "args": [
            "-y",
            "chrome-devtools-mcp@latest"
          ]
        }
      },
```
