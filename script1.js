//  Nje server i thjeshte me Node.js dhe Express.js 
var express = require('express');
var app = express();

// route per home
app.get('/home', function (req, res) {
    res.send("Text Response");
});

// route per user 
app.get('/user', function (req, res) { // Shkembimi i vendet e 'req' dhe 'res'
    var user = {
        name: 'Filan',
        surname: 'Fisteku'
    };
    res.send('Pershendetje ' + user.name + ' ' + user.surname);
});

// Startimi i serverit ne porten 8080
app.listen(8080, function () {
    console.log('Serveri po punon ne http://127.0.0.1:8080');
});


//127.0.0.1.8080/home -> porta 
//127.0.0.1.8080/user

