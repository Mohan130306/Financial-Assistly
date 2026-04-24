function FraudAlerts({ fraudTransactions }) {
  return (
    <section className="card">
      <h2>Fraud Detection</h2>
      {fraudTransactions.length === 0 ? (
        <p>No suspicious transactions found.</p>
      ) : (
        <ul className="fraud-list">
          {fraudTransactions.map((tx) => (
            <li key={tx.id}>
              ⚠️ {tx.name} - ${tx.amount.toLocaleString()} ({tx.date})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FraudAlerts;
