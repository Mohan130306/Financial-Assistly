import { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import ExpenseAnalyzer from '../components/ExpenseAnalyzer';
import FraudAlerts from '../components/FraudAlerts';
import ChatbotAssistant from '../components/ChatbotAssistant';
import { fetchTransactions, fetchAnalysis, fetchFraud } from '../services/api';

function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const [analysis, setAnalysis] = useState({ totalSpending: 0, byCategory: {} });
  const [fraudTransactions, setFraudTransactions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [txData, analysisData, fraudData] = await Promise.all([
        fetchTransactions(),
        fetchAnalysis(),
        fetchFraud()
      ]);

      setTransactions(txData);
      setAnalysis(analysisData);
      setFraudTransactions(fraudData);
    };

    loadData();
  }, []);

  return (
    <main className="dashboard">
      <header>
        <h1>Financial Assistly - AI Banking Assistant</h1>
      </header>

      <TransactionTable transactions={transactions} />

      <div className="two-col">
        <ExpenseAnalyzer analysis={analysis} />
        <FraudAlerts fraudTransactions={fraudTransactions} />
      </div>

      <ChatbotAssistant />
    </main>
  );
}

export default DashboardPage;
