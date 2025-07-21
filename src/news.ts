import axios from "axios";
import { NewsData, SummaryData } from "./types";
import { getGroqSummary } from "./groq";

const news: NewsData[] = [];
export const allSummaries: SummaryData[] = [];

export async function fetchNews() {
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

export async function summarizeNews() {
  await fetchNews();

  for (const article of news) {
    const summary = await getGroqSummary(article.title, article.description);

    allSummaries.push(summary);
  }
}
