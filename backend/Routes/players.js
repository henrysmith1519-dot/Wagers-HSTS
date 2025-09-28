const express = require('express');
const router = express.Router();

const players = [
  { id: 1, name: "Henry", score: 100 },
  { id: 2, name: "Alex", score: 200 },
];

// GET /api/players
router.get('/', (req, res) => {
  res.json(players);
});

module.exports = router;
