const express = require('express');
const router = express.Router();

const {
    getImages
} = require('../controllers/imagesController');

router.get('/:catagory', getAllArticles)


module.exports = router;