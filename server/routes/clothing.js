const express = require('express');
const router = express.Router();
const ClothingItem = require('../models/ClothingItem');
const multer = require('multer');

const upload = multer({
    dest: './uploads/',
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
  });
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { type, name, description } = req.body;
    const image = req.file.filename;
    const clothingItem = new ClothingItem({ type, name, description, image });
    await clothingItem.save();
    res.json({ message: 'Uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/combinations', async (req, res) => {
  try {
    const tops = await ClothingItem.find({ type: 'top' });
    const bottoms = await ClothingItem.find({ type: 'bottom' });
    const combinations = [];
    tops.forEach((top) => {
      bottoms.forEach((bottom) => {
        combinations.push({ top, bottom });
      });
    });
    res.json(combinations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching combinations' });
  }
});

module.exports = router;

