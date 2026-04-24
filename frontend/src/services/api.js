const API_BASE = 'http://localhost:5000/api';

export async function fetchTransactions() {
  const res = await fetch(`${API_BASE}/transactions`);
  return res.json();
}

export async function fetchAnalysis() {
  const res = await fetch(`${API_BASE}/analyze`);
  return res.json();
}

export async function fetchFraud() {
  const res = await fetch(`${API_BASE}/fraud`);
  return res.json();
}

export async function sendChatMessage(message) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });

  return res.json();
}
