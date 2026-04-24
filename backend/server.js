const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main API routes
app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Financial Assistly backend is running.' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
