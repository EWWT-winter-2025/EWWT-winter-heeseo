const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Mock database
const users = [];

router.post('/login', (req, res) => {
  const { id, password } = req.body;
  const user = users.find(user => user.id === id && user.password === password);
  if (user) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { id, password, nickname } = req.body;
    if (users.find(user => user.id === id)) {
      return res.status(400).send({ message: 'ID already exists' });
    }
    users.push({ id, password, nickname });
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router; 