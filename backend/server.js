const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hsts_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const playersRoute = require('./routes/players');
const usersRoute = require('./routes/users');
const express = require('express');
const cors = require('cors'); // import
const app = express();
const PORT = 5000;

app.use(cors()); // allow frontend to talk to backend
app.use('/api/players', playersRoute);
app.use('/api/users', usersRoute);

// existing route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
