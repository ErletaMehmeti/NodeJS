// Express vazhdim
// var express=require("express")
// var app = express()

// app.get('/users/:id', function(req,res){
//     var users=[
//         {id:1,name: 'fisteku'},
//         {id:2,name: 'filan'}
//     ]
//     const user= users.find(item => {
//         return item.id == req.params.id;
//     })
//     res.send('pershendetje'+ user.name)
// });
// app.listen(8011)

//detyra 1,2
const express = require('express');
const app = express();
const port = 3000;

const librat = [
    { id: 1, titulli: 'The Power of Now', autori: ' Eckhart Tolle' },
    { id: 2, titulli: 'Atomic Habits', autori: 'James Clear' },
    { id: 3, titulli: 'Thinking, Fast and Slow', autori: ' Daniel Kahneman' },
];

const produktet = [
    { id: 1, emri: 'Patika', cmimi: 100 },
    { id: 2, emri: 'Çante', cmimi: 200 },
    { id: 3, emri: 'Skincare', cmimi: 300 },
];

app.get('/librat', (req, res) => {
    res.json(librat);
});

app.get('/produkte', (req, res) => {
    res.json(produktet);
});

app.listen(port, () => {
    console.log(`Serveri po punon ne http://localhost:${port}`);
});





