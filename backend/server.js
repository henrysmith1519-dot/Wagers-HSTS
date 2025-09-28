const express = require('express');
const cors = require('cors'); // import
const app = express();
const PORT = 5000;

app.use(cors()); // allow frontend to talk to backend

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
