const express = require('express')
require('dotenv').config()
const app = express()
const { PORT, TOKEN,API_URL } = process.env

const fetch = require('node-fetch')

app.get('/get-address', (req, res) => {
  const query = req.originalUrl.split('?')[1]
  fetch(`${API_URL}?${query}&token=${TOKEN}`)
    .then(res => res.json())
    .then(({ result }) => res.send({ result }))
})

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`)
})
