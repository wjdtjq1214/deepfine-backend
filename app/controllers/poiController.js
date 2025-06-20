const xlsx = require('node-xlsx').default;

exports.importPoi = async function (req) {
  try {
    const workSheetsFromBuffer = xlsx.parse(req.file.buffer);
    const pois = workSheetsFromBuffer[0].data
      .slice(1)
      .map(([title, latitude, longitude]) => {
        return { title, latitude, longitude };
      });

    const deleteResult = await psql.delete('poi', 'poiDeleteAll', {});

    console.log(`Deleted ${deleteResult.rowCount} existing POIs.`);

    const insertResult = await psql.insert('poi', 'poiInsertMulti', { pois });

    console.log(`Deleted ${insertResult.rowCount} existing POIs.`);

    return insertResult.rowCount;
  } catch (error) {
    console.error('Error poiController(importing)');

    throw error;
  }
};

exports.getAllPoi = async function () {
  try {
    const selectResult = await psql.select('poi', 'poiSelectAll', {});

    return selectResult;
  } catch (error) {
    console.error('Error poiController(getAllPoi)');

    throw error;
  }
};
