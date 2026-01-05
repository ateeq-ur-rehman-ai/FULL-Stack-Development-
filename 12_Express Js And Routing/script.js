const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('I am Learning Backend Development.')
})

app.get('/Language', (req, res) => {
  res.send('With The Help Of JavaScript.')
})

app.listen(3000)