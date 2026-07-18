const express = require("express");
const router = express.Router();

const { askAI } = require("../controllers/aiController");

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SevaAI Backend is running 🚀",
  });
});

// AI Government Assistant
router.post("/ask", askAI);

module.exports = router;