const path = require('path');
const transactions = require(path.join(__dirname, '../../data/transactions.json'));

const getAllTransactions = () => transactions;

const normalizeCategory = (category = '') => {
  const accepted = ['Food', 'Travel', 'Shopping', 'Others'];
  return accepted.includes(category) ? category : 'Others';
};

const analyzeExpenses = () => {
  const totals = { Food: 0, Travel: 0, Shopping: 0, Others: 0 };

  transactions.forEach((tx) => {
    const category = normalizeCategory(tx.category);
    totals[category] += Number(tx.amount) || 0;
  });

  const overall = Object.values(totals).reduce((sum, amount) => sum + amount, 0);

  return {
    totalSpending: Number(overall.toFixed(2)),
    byCategory: Object.fromEntries(
      Object.entries(totals).map(([key, value]) => [key, Number(value.toFixed(2))])
    )
  };
};

const findFraudTransactions = () => {
  return transactions.filter(
    (tx) => Number(tx.amount) > 10000 || String(tx.name).toLowerCase().includes('unknown')
  );
};

module.exports = {
  getAllTransactions,
  analyzeExpenses,
  findFraudTransactions
};
