const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path'); 
const PORT = 3000;

app.use(cors()); 

app.use(express.static(path.join(__dirname, '../public')));

const jokes = [
    {
        setup: "Çka i ka thënë semafori kerrit?",
        punchline: "Mos me shiko se qitash ndrrona 😂"
    },
    {
        setup: "A e ke ni foren ma t're?",
        punchline: "Ska dal hala 🤓"
    },
    {
        setup: "Si pijaven kompjuterat?",
        punchline: "Me screenshots"
    },
];


app.get('/jokes', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    res.json({ joke: `${joke.setup} ${joke.punchline}` });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveri po punon ne portin: http://localhost:${PORT}`);
});



