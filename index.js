const express = require('express');

const planetRouter = require('./routes/planets.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();

const PORT = 3000;




app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    console.log(`using the middleware`);
    next();
    console.log(`Request took ${Date.now() - start}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/planets', planetRouter);
app.use('/messages', messagesRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});