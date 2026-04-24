function TransactionTable({ transactions }) {
  return (
    <section className="card">
      <h2>Transaction Dashboard</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => {
            const isHighValue = tx.amount > 5000;
            const isFraud = tx.amount > 10000 || tx.name.toLowerCase().includes('unknown');

            return (
              <tr
                key={tx.id}
                className={`${isHighValue ? 'high-value' : ''} ${isFraud ? 'fraud-row' : ''}`.trim()}
              >
                <td>{tx.name}</td>
                <td>${tx.amount.toLocaleString()}</td>
                <td>{tx.category}</td>
                <td>{tx.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionTable;
