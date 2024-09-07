const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://pravirstudy:l9bCqH0MJzLQOtFl@backenddb.li8va.mongodb.net/?retryWrites=true&w=majority&appName=BackEndDB')
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
