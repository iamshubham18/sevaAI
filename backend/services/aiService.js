const OpenAI = require("openai");
const systemPrompt = require("../prompts/systemPrompt");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const askGovernmentAssistant = async ({
  question,
  language,
  profile,
}) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `
Question: ${question}

Language: ${language}

User Profile: ${profile}
          `,
        },
      ],

      temperature: 0.3,

      response_format: {
        type: "json_object",
      },
    });

    return JSON.parse(
      completion.choices[0].message.content
    );
  } catch (error) {
    console.error("AI Service Error:", error);

    throw new Error("Unable to process AI request.");
  }
};

module.exports = {
  askGovernmentAssistant,
};