'use strict';

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var express = require('express')
var path = require('path')
var morgan = require('morgan')
var app = express()


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// app.use(morgan('dev'))
app.use(express.static(__dirname))
app.route('/').get(function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function () {
  console.log('\nServer listening on http://localhost:8080, Ctrl+C to stop')
})
