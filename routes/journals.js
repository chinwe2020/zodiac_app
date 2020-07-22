const router = require ('express').Router();
const journalCtrl = require('../controllers/journals');

router.use(require('../config/auth'));
router.get('/', checkAuth, journalCtrl.index);
router.post('/', checkAuth, journalCtrl.create);
router.put('/:id', checkAuth, journalCtrl.update);
router.delete('/:id', checkAuth, journalCtrl.delete);

function checkAuth(req, res, next) {
    console.log(req.user, "message")
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;