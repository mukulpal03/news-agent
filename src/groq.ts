import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqSummary(title: string, description: string) {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Summarize the following news in one concise sentence.
          Then assign it one category: Tech, Finance, Sports, Politics, or General.
          Return the result strictly as JSON.
            Title: ${title}
            Description: ${description}

            Format:
            {"summary": "...", "category": "..."}
          `,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  return JSON.parse(response.choices[0].message.content!);
}
