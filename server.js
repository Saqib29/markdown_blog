const express = require('express'); 
const router = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 8000

// view engine
app.set('view engine', 'ejs');

// routes
app.use('/articles', router);


// Main route
app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article',
        createdAT: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article',
        createdAT: new Date(),
        description: 'Test description'
    }];

    res.render('index', { articles: articles });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});