const express = require('express'); 
const router = require('./routes/routes');
const mongoose = require('mongoose');
const Article = require('./models/db');
const app = express();

const PORT = process.env.PORT || 8000

// view engine
app.set('view engine', 'ejs');

// middlwares
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/articles', router);


// Main route
app.get('/', async(req, res) => {

    const articles = await Article.find().sort({ createdAt : 'desc' });
    

    res.render('articles/index', { articles: articles });
});


mongoose.connect('mongodb+srv://saqib:saqib-29@nodetuts.qikfw.mongodb.net/markdown-blog?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('db connected');
});


app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});