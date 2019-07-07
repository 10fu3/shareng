const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello')
})

