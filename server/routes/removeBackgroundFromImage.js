import express from 'express';
import multer from 'multer';
import path from 'path';
import removeBackgroundFromImage from '../controllers/removeBackgroundFromImage.js';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/removeBackground', removeBackgroundFromImage);

export default router;
