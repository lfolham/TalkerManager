const fs = require('fs/promises');
const path = require('path');

const readTalker = async () => {
  const pathTest = '../talker.json';
  try {
    const arrTalkers = await fs.readFile(path.resolve(__dirname, pathTest), 'utf-8');
    return JSON.parse(arrTalkers);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getTalker = async () => {
  const arrTalkers = await readTalker();
  return arrTalkers;
};

const getIdFilter = async (id) => {
  const filteredId = await readTalker();
  return filteredId.find((talker) => talker.id === id);
};

module.exports = {
  readTalker,
  getTalker,
  getIdFilter,
};