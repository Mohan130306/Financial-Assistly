import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function ExpenseAnalyzer({ analysis }) {
  const categories = Object.keys(analysis.byCategory || {});
  const values = Object.values(analysis.byCategory || {});

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Spending by Category',
        data: values,
        backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
        borderColor: '#1d4ed8',
        borderWidth: 1
      }
    ]
  };

  return (
    <section className="card">
      <h2>Expense Analyzer</h2>
      <p className="total">Total Spending: ${analysis.totalSpending?.toLocaleString() || 0}</p>
      <div className="chart-wrapper">
        <Bar data={chartData} />
      </div>
    </section>
  );
}

export default ExpenseAnalyzer;
