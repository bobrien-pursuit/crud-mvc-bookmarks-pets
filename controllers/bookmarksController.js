const express = require('express')
// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router()

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark')


// Index Routes: gets all of the bookmarks
// localhost:4001/bookmarks/
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})

// SHOW 

bookmarks.get('/:arrayIndex', (req, res) => {
    let { arrayIndex } = req.params;

    (bookmarksArray[arrayIndex]) ? 
    res.json(bookmarksArray[arrayIndex]) :
    res.status(404).json({ error: "Not Found" });

})

// POST: creates a new bookmark and adds to JSON

//localhost:4001/bookmarks/
bookmarks.post(`/`, (req, res) => {
    bookmarksArray.push(req.body);
    res.json(bookmarksArray[bookmarksArray.length - 1]);
})



module.exports = bookmarks