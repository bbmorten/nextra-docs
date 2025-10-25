# Qwen Code Installation Guide

> Qwen Code is a command-line AI workflow tool optimized for Qwen3-Coder models with enhanced parser support & tool support.

## Prerequisites

- **Node.js**: Version 20 or higher required
- **npm**: Package manager (comes with Node.js)

```bash
# Check Node.js version
node --version

# Install npm if needed
curl -qL https://www.npmjs.com/install.sh | sh
```

## Installation Methods

### Method 1: Global Installation (Recommended)

```bash
# Install globally from npm
npm install -g @qwen-code/qwen-code@latest

# Verify installation
qwen --version

# Run from anywhere
qwen
```

### Method 2: Install from Source

```bash
# Clone the repository
git clone https://github.com/QwenLM/qwen-code.git

# Navigate to directory
cd qwen-code

# Install dependencies
npm install

# Install globally from source
npm install -g .
```

## API Configuration

### Step 1: Get API Key

**For Mainland China Users:**
- Alibaba Cloud Bailian: https://bailian.console.aliyun.com/
- ModelScope: https://modelscope.cn/docs/model-service/API-Inference/intro

**For International Users:**
- Alibaba Cloud ModelStudio: https://modelstudio.console.alibabacloud.com/

### Step 2: Set Environment Variables

**Option A: Alibaba Cloud Bailian (Mainland China)**
```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

**Option B: ModelScope (Mainland China - 2,000 free calls/day)**
```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"
export OPENAI_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct"
```

**Option C: International ModelStudio**
```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

### Step 3: Configure Session Limits (Optional)

Create `.qwen/settings.json` in your project root:

```json
{
  "sessionTokenLimit": 32000
}
```

Or create `.env` file in your project root:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
OPENAI_MODEL=qwen3-coder-plus
```

## Quick Start

```bash
# Navigate to your project
cd your-project/

# Start Qwen Code
qwen

# Example commands
> Describe the main pieces of this system's architecture
> Refactor this function to improve readability and performance
> Analyze git commits from the last 7 days, grouped by feature
```

## Key Features

- **Code Understanding & Editing**: Query and edit large codebases beyond traditional context window limits
- **Workflow Automation**: Automate operational tasks like handling pull requests and complex rebases  
- **Enhanced Parser**: Adapted parser specifically optimized for Qwen-Coder models

## Useful Commands

```bash
# Compress chat history when reaching token limit
/compress

# Clear chat history
/clear

# Check version
qwen --version
```

## Important Notes

⚠️ **Token Usage Warning**: Qwen Code may issue multiple API calls per cycle, resulting in higher token usage. Monitor your API usage accordingly.

✅ **Free Tier**: ModelScope offers 2,000 free API calls per day for mainland China users.

## Troubleshooting

- Check [troubleshooting guide](https://github.com/QwenLM/qwen-code/blob/main/docs/troubleshooting.md)
- Ensure Node.js version 20+ is installed
- Verify API key and endpoint configuration
- Check network connectivity to API endpoints

## Project Links

- **Repository**: https://github.com/QwenLM/qwen-code
- **Issues**: https://github.com/QwenLM/qwen-code/issues
- **Contributing**: https://github.com/QwenLM/qwen-code/blob/main/CONTRIBUTING.md
- **License**: Apache-2.0