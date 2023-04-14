const express = require('express');
const { 
  getTalker,
  getIdFilter,
} = require('../utils/readJsonData');

const route = express.Router();
// const talkerPath = path.resolve(__dirname, './talker.json');

// talker
route.get('/', async (_req, res) => {
  const talker = await getTalker();
  if (!talker) { return res.status(200).json([]); }
  return res.status(200).json(talker);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const filteredTalker = await getIdFilter(+id);
  if (!filteredTalker) {
return res.status(404).json(
    { message: 'Pessoa palestrante não encontrada' },
); 
}
  return res.status(200).json(filteredTalker);
});

module.exports = route;