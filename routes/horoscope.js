const router = require('express').Router();
const horoscopeCtrl = require('../controllers/horoscope');

router.get('/', horoscopeCtrl.index);


module.exports = router;