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

## Windows Troubleshooting (`@rollup/rollup-win32-x64-msvc` error)
If you see this while running `npm run dev` in `frontend`:

`Cannot find module @rollup/rollup-win32-x64-msvc` or `ERR_DLOPEN_FAILED`

1. Close terminal/editor windows using the project.
2. Delete frontend install artifacts:

```bash
cd frontend
rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
```

3. Clear npm cache and reinstall:

```bash
npm cache clean --force
npm install
```

4. Run dev server again:

```bash
npm run dev
```

### If your company policy blocks native `.node` binaries
This repo now uses Vite 4.x to reduce native Rollup binding issues. If your environment still blocks native modules, run in WSL2 or use a machine without application control restrictions.
