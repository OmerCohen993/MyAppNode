const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    createArticle,
    getAllArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articles');

router.get('https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}', getAllArticles)
router.post('/', createArticle)
router.get('/:articleId', getAllArticle)
router.patch('/:articleId', updateArticle)
router.delete('/:articleId', deleteArticle)

module.exports = router;