# LLMs

##  Samples

- [Docker Hub LLM Sample](https://www.docker.com/blog/llm-docker-for-local-and-hugging-face-hosting/?_gl=1*1ysd21w*_ga*MTU0OTU4NTQyMi4xNzExMDk1MTY5*_ga_XJWPQMJYHQ*MTcxMTcwMTY3MS4zLjEuMTcxMTcwMTY3Mi41OS4wLjA.f)

##  Ollama

[Ollama Download](https://ollama.com/download)

```shell title='Instructions to run a model'


brew install ollama
ollama serve  
# Başka ekranda
ollama run llama2
```

[Turkcell HuggingFace](https://huggingface.co/TURKCELL)

##  Private GPT  

###  Installation

[Private GPT Installation](https://docs.privategpt.dev/installation/getting-started/installation)

```shell
# Another screen
ollama serve
ollama pull mistral
ollama pull nomic-embed-text
```

```shell
# Başka bir ekranda 
ollama serve
ollama pull mistral
ollama pull nomic-embed-text
ollama serve

# Working
git clone https://github.com/imartinez/privateGPT
cd privateGPT
python3.11 -m venv .venv && source .venv/bin/activate
pip install --upgrade pip poetry
pip install ffmpy==0.3.1
pip install build
poetry install --extras "ui llms-sagemaker embeddings-sagemaker vector-stores-qdrant llms-ollama embeddings-ollama "
PGPT_PROFILES=ollama make run

```

```shell
# was not useful
pip install torch transformers python-pptx Pillow

```

##  Hugging Face Spaces

[bbmorten hugging face](https://huggingface.co/bbmorten)

##  Gradio

[Gradio App](https://www.gradio.app/guides/gradio-and-llm-agents)

## jupyter-widgets/ipywidgets

<https://github.com/jupyter-widgets/ipywidgets/tree/b78de43e12ff26e4aa16e6e4c6844a7c82a8ee1c>

<https://home.openweathermap.org/api_keys>

##  AI Browser

[AI Browser Pinokio](https://pinokio.computer)

## OpenChat

[what does openchat do?](https://github.com/imoneoi/openchat)

##  Gretel Navigator

[Gretel Navigator](https://gretel.ai/navigator)

<https://huggingface.co/datasets/gretelai/synthetic_text_to_sql>

##  LM Studio

[LM Studio Download Link](https://lmstudio.ai)

Discover, download, and run local LLMs 


