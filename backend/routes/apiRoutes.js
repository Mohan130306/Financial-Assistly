const express = require('express');
const {
  getTransactions,
  getAnalysis,
  getFraudTransactions
} = require('../controllers/transactionController');
const { postChatMessage } = require('../controllers/chatController');

const router = express.Router();

router.get('/transactions', getTransactions);
router.get('/analyze', getAnalysis);
router.get('/fraud', getFraudTransactions);
router.post('/chat', postChatMessage);

module.exports = router;
