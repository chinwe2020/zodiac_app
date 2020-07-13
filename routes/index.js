const router = require('express').Router();
const indexCtrl = require('../controllers/indices');

router.get('/', indexCtrl.index);

module.exports = router;