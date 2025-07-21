import { allSummaries, summarizeNews } from "./news";
import { SummaryData } from "./types";

function generateReport(summaries: SummaryData[]) {
  const reportData = summaries.reduce((acc: any, curr: SummaryData) => {
    const key = curr.category;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr.summary);

    return acc;
  }, {});

  console.log(reportData);
}

summarizeNews().then(() => {
  generateReport(allSummaries);
});
