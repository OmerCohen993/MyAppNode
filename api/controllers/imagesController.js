const mongoose = require('mongoose');
const Article = require('../models/article');

module.exports = {

    getImages: (req, res) => {
        const articleId = req.params.articleId;

        Article.findById(articleId).then((article) => {
            res.status(200).json({
                article
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}