const express = require('express')
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router()

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark')
const bookmark = require('../models/bookmark')
const { checkForNameKey, testIfEndsInDotCom } = require("../validations/bookmarkValidations");



// Index Routes: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})

// SHOW 

bookmarks.get('/:arrayIndex', (req, res) => {
    let { arrayIndex } = req.params;

    bookmarksArray[arrayIndex] ? 
    res.json(bookmarksArray[arrayIndex]) :
    res.status(404).json({ error: "Not Found" });

})


// POST: creates a new bookmark and adds to JSON

//localhost:4001/bookmarks/
bookmarks.post(`/`, checkForNameKey, testIfEndsInDotCom, (req, res) => {
    bookmarksArray.push(req.body);
    res.json(bookmarksArray[bookmarksArray.length - 1]);
})

// DELETE

//localhost:4001/bookmarks/#
bookmarks.delete(`/:arrayIndex`, (req, res) => {
    let { arrayIndex } = req.params;

    if (bookmarksArray[arrayIndex]) {
        bookmarksArray.splice(arrayIndex, 1);
        res.json({error: "Bookmark Successfully Deleted."});
    }
    else
        res.status(404).json( {error: "Not Found"});
    // bookmarksArray[arrayIndex] ? 
    // res.status(200).json(bookmarksArray.splice(arrayIndex, 1)) :
    // res.status(404).json({ error: "Not Found"});

    // res.redirect("/bookmarks");
}) 

// UPDATE

//localhost:4001/bookmarks/#

bookmarks.put("/:arrayIndex", checkForNameKey, testIfEndsInDotCom, (req, res) => {
    const { arrayIndex } = req.params;

    bookmarksArray[arrayIndex] = req.body;
    res.status(200).json(bookmarksArray[arrayIndex]);
})

module.exports = bookmarks