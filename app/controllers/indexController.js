const defaultMapper = 'index';
const indexModel = require('../models/indexModel');

exports.getIndex = async function (req) {
  try {
    const selectResult = await psql.select('poi', 'poiSelectAll', {});

    return selectResult;
  } catch (error) {
    console.error('Error poiController(getIndex)');

    throw error;
  }
};