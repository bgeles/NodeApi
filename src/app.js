'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//importando Rotas
const indexRoutes = require('./routes/index-route');
const productsRoutes = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));


app.use('/', indexRoutes);
app.use('/products', productsRoutes);


module.exports = app;