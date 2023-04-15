const express = require('express');
const uniqueToken = require('../utils/token');

const loginRoute = express.Router();

loginRoute.post('/', async (req, res) => {
  const token = uniqueToken();
  return res.status(200).json({ token });
});

module.exports = loginRoute;