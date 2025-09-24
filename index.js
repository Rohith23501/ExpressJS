const express = require('express');

const app = express();

const PORT = 3000;


const planets = [
    {id: 0, name: "Mercury", 
    remarks: "The smallest planet in our solar system and nearest to the Sun."},
    {id: 1, name: "Venus", 
        remarks: "Second planet from the Sun and is Earth's closest planetary neighbor."},
    {id: 2, name: "Earth", 
        remarks: "Our own home planet"},
    {id: 3, name: "Mars", 
        remarks: "The Red Planet is dusty, cold world with a thin atmosphere and is home to four NASA robots."},
    {id: 4, name: "Jupiter", 
        remarks: "The largest planet in our solar system and fifth from the Sun."  },
    {id: 5, name: "Saturn",
         remarks: "Adorned with a dazzling, complex system of icy rings, Saturn is the sixth planet from the Sun and the second-largest planet in our solar system."},
    {id: 6, name: "Uranus", 
        remarks: "The seventh planet from the Sun, Uranus is a cold, windy world that rotates on its side." },

    {id: 7, name: "Neptune",
        remarks: "The eighth and most distant planet in our solar system, Neptune is a cold, dark world nearly 3 billion miles from the Sun."},
    {id: 8, name: "Pluto", 
        remarks: "A complex and mysterious world with a heart-shaped glacier the size of Texas and Oklahoma."},
]

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    console.log(`using the middleware`);
    next();
    console.log(`Request took ${Date.now() - start}ms`);
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/planets', (req, res) => {
    res.json(planets);   
});

app.get('/planets/:id', (req, res) => {
    const planetId = parseInt(req.params.id, 10);
    const planet = planets[planetId];
    if (planet) {
        res.json(planet);
    }
    else{
        res.status(404).json({ error: `Planet not found` +
            ` in our solar system` });
    };
});

app.get('/messages', (req, res) => {
    res.json({ message: 'This is the messages endpoint' });
});

app.post('/messages', (req, res) => {
    res.json({ message: 'Message received' });
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});