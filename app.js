
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();


connectDB();


app.use(express.json());
app.use(morgan('dev'));


app.use('/api/books', bookRoutes);

module.exports = app;
