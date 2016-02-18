'use strict';

var express = require('express')
var path = require('path')
var morgan = require('morgan')
var app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname))
app.route('/*').get(function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function () {
  console.log('\nServer listening on http://localhost:8080, Ctrl+C to stop')
})