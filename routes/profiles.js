const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');


router.use(require('../config/auth'));
//to create a profile
router.get('/profile', profilesCtrl.index);
router.get('/profile', profilesCtrl.create);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;