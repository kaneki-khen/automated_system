const express = require ('express'); 
const morgan = require ('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen (3000);

// midddlware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const create = [
        {title: 'Python Documentation', snippet: 'https://python-adv-web-apps.readthedocs.io/en/latest/'},
        {title: 'MongoDB Installation', snippet: 'https://www.mongodb.com/docs/'},
        {title: 'Java Tutorial', snippet: 'https://dev.java/learn/'}
    ];
    res.render('index', { title: 'Home', create});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
});
