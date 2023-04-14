const express = require('express');
const { getTalker } = require('../utils/readJsonData');

const route = express.Router();
// const talkerPath = path.resolve(__dirname, './talker.json');

// talker
route.get('/', async (_req, res) => {
  const talker = await getTalker();
  if (!talker) { return res.status(200).json([]); }
  return res.status(200).json(talker);
});

module.exports = route;