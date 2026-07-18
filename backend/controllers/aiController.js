const { askGovernmentAssistant } = require("../services/aiService");

const askAI = async (req, res) => {
  try {
    const { question, language, profile } = req.body;

    // Basic Validation
    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required.",
      });
    }

    // Call AI Service
    const response = await askGovernmentAssistant({
      question,
      language: language || "English",
      profile: profile || "General",
    });

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("AI Controller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while processing your request.",
    });
  }
};

module.exports = {
  askAI,
};