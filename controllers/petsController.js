const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')

const { checkForNameKey } = require("../validations/petValidations");


// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray);
})

//localhost:4401/pets
pets.get(`/:arrayIndex`, (req, res) => {
    const { arrayIndex } = req.params;

    petsArray[arrayIndex] ? 
    res.status(200).json(petsArray[arrayIndex]) : 
    res.status(404).json({error: "Not Found"});

});

//sends a new pet
pets.post(`/`, checkForNameKey, (req, res) => {
    petsArray.push(req.body);
    res.status(201).json(petsArray[petsArray.length-1]);
})

// DELETE

pets.delete(`/:arrayIndex`, (req, res) => {
    const { arrayIndex } = req.params;

    if(petsArray[arrayIndex]) {
        petsArray.splice(arrayIndex, 1);
        res.json({message: "Pet successfully deleted"});
     } 
    else
        res.json({error: "Pet not found."});
     
    // petsArray[arrayIndex] ?
    // res.status(200).json(petsArray.splice(arrayIndex, 1)) :
    // res.status(404).json({error: "Not found."});
})

// PUT

pets.put(`/:arrayIndex`, checkForNameKey, (req, res) => {
    const { arrayIndex } = req.params;

    petsArray[arrayIndex] = req.body;
    res.status(200).json(petsArray[arrayIndex]);
})




module.exports = pets