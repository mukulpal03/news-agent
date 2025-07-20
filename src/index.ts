import Groq from "groq-sdk";
import axios from "axios";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface NewsData {
  title: string;
  description: string;
  url: string;
}

const news: NewsData[] = [];

export async function getGroqChatCompletion() {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a news summarizer",
      },
    ],
    model: "llama-3.3-70b-versatile",
    tools: [
      {
        type: "function",
        function: {
          name: "fetchNews",
          description: "Fetch the news and summarize it in one line",
        },
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

async function fetchNews() {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`
  );

  response.data.articles.forEach((article: any) =>
    news.push({
      title: article.title,
      description: article.description,
      url: article.url,
    })
  );
}

fetchNews();

getGroqChatCompletion();
