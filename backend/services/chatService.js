const { analyzeExpenses, findFraudTransactions } = require('./transactionService');

const getSavingTips = () =>
  'Saving tip: Follow the 50/30/20 rule, set monthly limits, and automate transfers to a savings account.';

const getChatResponse = (message = '') => {
  const normalized = message.toLowerCase();

  if (normalized.includes('food')) {
    const analysis = analyzeExpenses();
    return `Your food spending is $${analysis.byCategory.Food.toFixed(2)}.`;
  }

  if (normalized.includes('fraud')) {
    const suspicious = findFraudTransactions();
    if (!suspicious.length) {
      return 'No suspicious transactions were found.';
    }

    return `I found ${suspicious.length} suspicious transaction(s): ${suspicious
      .map((tx) => `${tx.name} ($${tx.amount})`)
      .join(', ')}.`;
  }

  if (normalized.includes('save')) {
    return getSavingTips();
  }

  return 'I can help with food spending, fraud checks, and saving tips. Try asking about those topics.';
};

module.exports = { getChatResponse };
