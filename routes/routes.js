const express = require('express');
const Article = require('./../models/db');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new');
});

router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router;