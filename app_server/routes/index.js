var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET travlr page. */
router.get('/travlr', ctrlMain.travlr);

/* GET travel page. */
router.get('/travel', ctrlMain.travlr);

module.exports = router;
