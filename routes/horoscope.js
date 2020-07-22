const router = require('express').Router();
const horoscopeCtrl = require('../controllers/horoscope');
router.use(require('../config/auth'));
router.get('/', horoscopeCtrl.index);


module.exports = router;