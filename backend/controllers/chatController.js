const { getChatResponse } = require('../services/chatService');

const postChatMessage = (req, res) => {
  const { message } = req.body;
  const response = getChatResponse(message || '');
  res.json({ response });
};

module.exports = { postChatMessage };
