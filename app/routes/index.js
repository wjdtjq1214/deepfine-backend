const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/index', async function (req, res, next) {
  const poiArray = await indexController.getIndex(req);

  res.render('index', { title: 'Express', tmapApiKey: CONFIG.tmap_api_info.key, poiArray });
});

module.exports = router;
