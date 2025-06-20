const express = require('express');
const router = express.Router();
const poiController = require('../controllers/poiController');
const multer = require('multer');
const upload = multer();

/* POST import poi */
router.post('/import', upload.single('file'), async function (req, res, next) {
  try {
    const result = await poiController.importPoi(req);

    return res
      .status(200)
      .json({ message: `Successfully imported ${result} POIs.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to import POIs.' });
  }
});

router.get('/', async function (req, res, next) {
  try {
    const result = await poiController.getAllPoi();

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get POIs.' });
  }
});

module.exports = router;
