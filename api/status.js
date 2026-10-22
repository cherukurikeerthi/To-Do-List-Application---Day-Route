
const { AI_NOT_CONFIGURED } = require('../lib/study-chat');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  res.status(200).json({
    available: Boolean(process.env.OPENAI_API_KEY),
    message: process.env.OPENAI_API_KEY
      ? 'AI chat is ready.'
      : AI_NOT_CONFIGURED,
  });
};
