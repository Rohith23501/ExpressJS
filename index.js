const express = require('express');

const planetController = require('./controllers/planets.controller.js');
const messagesController = require('./controllers/messages.controller.js');

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

const friendsRouter = express.Router();


friendsRouter.get('/', planetController.getPlanets);
friendsRouter.get('/:id', planetController.getPlanet);
friendsRouter.post('/', planetController.postPlanet);

app.use('/planets', friendsRouter);

app.get('/messages', 
    messagesController.getMessages);
app.post('/messages', messagesController.postMessages); 


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});