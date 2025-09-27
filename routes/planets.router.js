const express = require('express');

const planetController = require('../controllers/planets.controller.js');

const planetRouter = express.Router();


planetRouter.get('/', planetController.getPlanets);
planetRouter.get('/:id', planetController.getPlanet);
planetRouter.post('/', planetController.postPlanet);

module.exports = planetRouter;