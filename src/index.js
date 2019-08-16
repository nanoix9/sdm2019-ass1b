const express = require('express')
const path = require('path');

const app = express()
const port = 3000

const res_path = path.join(path.dirname(__dirname), 'dist', 'frontend');

app.set('views', res_path);
app.engine('html', require('ejs').renderFile);
app.use(express.static(res_path));

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))