const express = require('express');
const uniqueToken = require('../utils/token');
const { validateUser } = require('../middleware/validateUser');

const loginRoute = express.Router();

loginRoute.post('/', validateUser, (_req, res) => {
  const token = uniqueToken();
  return res.status(200).json({ token });
});

module.exports = loginRoute;