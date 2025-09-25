const { planets} = require('../models/planets.model.js');

function getPlanets(req, res)
 {
    res.json(planets);   
};


function getPlanet(req, res) {
    const planetId = parseInt(req.params.id, 10);
    const planet = planets[planetId];
    if (planet) {
        res.json(planet);
    }
    else{
        res.status(404).json({ error: `Planet not found` +
            ` in our current database` });
    };
};



function postPlanet(req, res)  {
    if (!req.body.name) {
        return res.status(400).json({ error: 'Planet name is required' });
        
    };
    const newPlanet = {
        id : planets.length,
        name : req.body.name,
        remarks : req.body.remarks 
    }
    planets.push(newPlanet);
    res.json(newPlanet);
};

module.exports = {
    getPlanets,
    getPlanet,
    postPlanet
};

