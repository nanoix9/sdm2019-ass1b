const express = require('express')
const app = express()
const port = 3000

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))