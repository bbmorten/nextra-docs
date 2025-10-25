# Quickly Test Gemini API

## with curl


```shell
export GEMINI_API_KEY=
```

```shell
#!/bin/bash

# Load environment variables from .env
export $(grep -v '^#' .env | xargs)

API_KEY="$GEMINI_API_KEY"
MODEL="gemini-2.0-flash"
PROMPT="Explain how EBPF in Linux Kernel works"

# Replace the following URL and payload with the actual Gemini API endpoint and request format
#curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent" \
#    -H "Content-Type: application/json" \
#    -H "Authorization: Bearer ${API_KEY}" \
#    -d '{
#    "contents": [
#      {
#        "parts": [
#          {
#            "text": "'"${PROMPT}"'"
#          }
#        ]
#      }
#    ]
#  }'


curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "'"${PROMPT}"'"
          }
        ]
      }
    ]
  }'
```

## with Python

```shell
more /Users/bulent/git-msp/gemini/generateContent.py
```
