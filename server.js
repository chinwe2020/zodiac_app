const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const horoscopeRouter = require('./routes/horoscope');
const signsRouter = require('./routes/signs');
const profilesRouter = require('./routes/profiles');
const journalsRouter = require('./routes/journals');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



app.use('/api/horoscopes', horoscopeRouter);
app.use('/api/users', userRouter);
app.use('/profile', profilesRouter);
app.use('/journal', journalsRouter);
app.use('/api', signsRouter);


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
