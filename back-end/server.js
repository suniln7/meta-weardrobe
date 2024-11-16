const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wardrobe-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/clothes', (req, res) => {
  // Return clothes data
});

app.post('/api/clothes', (req, res) => {
  // Save cloth data
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});