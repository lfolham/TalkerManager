const express = require('express');
const { 
  getTalker,
  getIdFilter,
} = require('../utils/readJsonData');

const talkerRoute = express.Router();

// talker
talkerRoute.get('/', async (_req, res) => {
  const talker = await getTalker();
  if (!talker) { return res.status(200).json([]); }
  return res.status(200).json(talker);
});

talkerRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const filteredTalker = await getIdFilter(+id);
  if (!filteredTalker) {
return res.status(404).json(
    { message: 'Pessoa palestrante não encontrada' },
); 
}
  return res.status(200).json(filteredTalker);
});

module.exports = talkerRoute;