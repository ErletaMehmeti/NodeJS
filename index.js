const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//  Ktu e kem bo Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Ktu Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Spitali' });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'Rreth Spitalit' });
});

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Regjistrohu' });
});

app.post('/signup', (req, res) => { 
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Kyçu' });
});

app.post('/login', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Na ka met me bo piken 7. Në aplikacion duhet të përdoret: autentifikimi dhe autorizimi.



