const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')


// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray)
})

//localhost:4401/pets
pets.get(`/:arrayIndex`, (req, res) => {
    const { arrayIndex } = req.params;

    petsArray[arrayIndex] ? 
    res.json(petsArray[arrayIndex]) : 
    res.status(404).json({error: "Not Found"});

});




module.exports = pets