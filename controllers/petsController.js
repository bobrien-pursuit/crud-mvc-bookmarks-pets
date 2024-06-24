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
    res.json(petsArray[arrayIndex]);
})


module.exports = pets