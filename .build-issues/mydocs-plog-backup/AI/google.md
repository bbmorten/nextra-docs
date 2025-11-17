#  Google AI Stuff

## Google AI Studio

<https://aistudio.google.com/>

```shell
export APIKEY="AIzaSyBmaHi0l_Pi-Sh_01dHkwWQySNffR2k7H0"

curl \
  -H "Content-Type: application/json" \
  -d "{\"contents\":[{\"parts\":[{\"text\":\"Explain how AI works\"}]}]}" \
  -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${YOUR_API_KEY}"
```

## Google Vertex AI

<https://console.cloud.google.com/vertex-ai/studio/freeform?project=my-project-28614-test&hl=en&inv=1&invt=AbjelA>
