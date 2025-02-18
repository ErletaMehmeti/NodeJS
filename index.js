const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'sekreti_erleta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Funksioni per me kontrollu nese perdoruesi eshte i kyçur
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Spitali', user: req.session.user });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'Rreth Spitalit', user: req.session.user });
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
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.user = username;
        res.redirect('/dashboard');
    } else {
        res.render('login', { title: 'Kyçu', error: 'Emri ose fjalkalimi i gabuar' });
    }
});
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { title: 'Paneli', user: req.session.user });
});
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
// Na ka met me bo piken 7. Në aplikacion duhet të përdoret: autentifikimi dhe autorizimi. edhe e kryva 



