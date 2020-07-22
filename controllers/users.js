const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  updateUser
};

function updateUser(req, res){
  console.log(req.body, "msg");
  // req.body.user = req.user._id;
  console.log(req.body, "body")
  console.log(req.user, "user")
  User.findByIdAndUpdate({"_id":req.user._id}, req.body, {upsert: true, new: true})
  .then((user) => {if (user) {res.json(user)} else {res.json({message: 'there is no user'})}})
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}