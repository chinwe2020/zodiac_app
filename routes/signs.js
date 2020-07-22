var express = require('express');
var router = express.Router();
var signsCtrl = require('../controllers/signs')

router.get('/signs', signsCtrl.index)
router.post('/signs', signsCtrl.create)
router.put('/signs/:id', signsCtrl.update)
router.delete('/signs/:id', signsCtrl.delete)
router.get('/signs/:id', signsCtrl.show)



module.exports = router;
