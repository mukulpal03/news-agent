# Daily News Briefing Agent

A Node.js-based AI agent that fetches the latest news, summarizes each article into one concise line, categorizes it (Tech, Finance, Sports, Politics, General), and generates a clean daily digest.

## Features

- Fetches top headlines using NewsAPI.

- Summarizes news with AI (Groq + LLaMA 3.3).

- Categorizes articles automatically into relevant topics.

- Outputs a formatted daily digest in the console.

## How It Works

1. Fetches the top news headlines (10 by default).

2. For each article:

3. Summarizes using Groq (LLaMA model).

4. Assigns a category (Tech, Finance, Sports, Politics, General).

5. Groups the results into a daily report.

6. Logs the report in the console.

## Tech Stack

- Node.js 

- Groq SDK 

- Axios 

- NewsAPI 

## Getting Started

Follow these steps to set up and run the Daily News Briefing Agent on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) version 18 or higher  
- A [NewsAPI](https://newsapi.org/) account to fetch headlines  
- A [Groq](https://groq.com/) API key for summarization (LLaMA model)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/mukulpal03/news-agent.git
cd news-agent
pnpm install
```
### Environment Variables

Create a `.env` file in the root of your project and add your API keys:

```ini
NEWS_API_KEY=your_newsapi_key
GROQ_API_KEY=your_groq_api_key
```

### Run the Agent

Run the script to fetch, summarize, and generate the daily digest:

```bash
pnpm run dev
```