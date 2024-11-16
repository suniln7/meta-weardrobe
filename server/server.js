const express = require('express');
const app = express();
const clothingRouter = require('./routes/clothing');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meta-wardrobe', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/clothing', clothingRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});