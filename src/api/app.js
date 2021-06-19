const { echoComponent } = require('./components')

const express = require("express");

const app = express(); // create express app

app.use(express.static('./public'))

app.use('/api/', echoComponent.router);

module.exports = app
