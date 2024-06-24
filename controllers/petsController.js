const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')


// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray);
})

//localhost:4401/pets
pets.get(`/:arrayIndex`, (req, res) => {
    const { arrayIndex } = req.params;

    petsArray[arrayIndex] ? 
    res.json(petsArray[arrayIndex]) : 
    res.status(404).json({error: "Not Found"});

});

//sends a new pet
pets.post(`/`, (req, res) => {
    petsArray.push(req.body);
    res.status(201).json(petsArray[petsArray.length-1]);
})




module.exports = pets