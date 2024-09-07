const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const mongoUri = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect('mongoUri')
  .then(() => {
    console.log('Connected to db');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.get('/', (req, res) => {
  res.send('hello from me');
});

module.exports = { app, mongoose };  // Export both app and mongoose
