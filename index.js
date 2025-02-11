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
