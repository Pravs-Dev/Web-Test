const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('your-mongo-db-uri-here')
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
