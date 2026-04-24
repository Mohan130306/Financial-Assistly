# Financial Assistly – AI Banking Assistant

A clean full-stack banking dashboard built with **React + Express**.

## Features
- Transaction dashboard with high-value highlighting
- Expense analyzer with category totals and chart
- Fraud detection section for suspicious transactions
- Rule-based chatbot assistant

## Project Structure

```
financial-assistly/
  frontend/
    src/
      components/
      pages/
      services/
  backend/
    routes/
    controllers/
    services/
  data/
    transactions.json
```

## Setup

### 1) Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2) Run backend

```bash
cd backend
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3) Run frontend

```bash
cd frontend
npm run dev
```

Frontend runs at: `http://localhost:5173`

## API Endpoints
- `GET /api/transactions` → all transactions
- `GET /api/analyze` → expense totals by category + total
- `GET /api/fraud` → suspicious transactions
- `POST /api/chat` → chatbot response from `{ "message": "..." }`
