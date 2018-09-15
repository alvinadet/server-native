const express = require('express');
const router = express.Router();
const Todos = require('../models/Todos');

router.get('/todos', async (req, res) => {
  res.send('okee');
});

router.post('/todos', async (req, res) => {
  res.send('sipp');
});

router.delete('/todos', (req, res) => {
  res.send('Delete Todo');
});

router.patch('/todos/:id', (req, res) => {
  res.send('Parch Todo');
});

module.exports = router;
