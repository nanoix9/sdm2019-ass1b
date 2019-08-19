const express = require('express')
const path = require('path');
const db = require('./db.js');

const app = express()

const res_path = path.join(path.dirname(path.dirname(__dirname)), 'dist', 'frontend');

app.set('views', res_path);
app.engine('html', require('ejs').renderFile);
app.use(express.static(res_path));

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
  res.render('index.html');
})

app.get('/users', (req, res) => {
  db.find_all('user')
  .then((docs) => {
    console.debug(docs);
    res.send(docs)
  })
  .catch(err => {
    console.debug('find all error:', err);
    res.send([]);
  });
});

module.exports = app;