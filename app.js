const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dotenv;

if (process.env.NODE_ENV !== 'production') {
  dotenv = require('dotenv').config();
}

const productRoutes = require('./api/routes/products');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allor-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).jason({});
  }
  next();
});

app.use('/products', productRoutes);

app.use('/', (req, res, next) => {  
  if (req.url.length === 1) {
    res.status(200).json({
      method: 'GET',
      status: 200,
      message: 'Olá! Eu sou uma API! =)'
    })
  } else {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  }
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      method: 'GET',
      status: 404,
      message: error.message
    }
  })
});

module.exports = app;

