const {
  getAllTransactions,
  analyzeExpenses,
  findFraudTransactions
} = require('../services/transactionService');

const getTransactions = (_req, res) => {
  res.json(getAllTransactions());
};

const getAnalysis = (_req, res) => {
  res.json(analyzeExpenses());
};

const getFraudTransactions = (_req, res) => {
  res.json(findFraudTransactions());
};

module.exports = {
  getTransactions,
  getAnalysis,
  getFraudTransactions
};
