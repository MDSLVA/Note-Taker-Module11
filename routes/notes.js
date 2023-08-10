// Import the required modules
const express = require('express'); 
const router = express.Router(); 
const uuid = require('uuid'); 
const path = require('path'); 

const db = require('../db/db.json'); 

// Define a route to handle GET requests for retrieving notes
router.get('/notes', (req, res) => {
  res.json(db); 
});

// Define a route to handle POST requests for creating new notes
router.post('/notes', (req, res) => {
  const { title, content } = req.body; 
  const newNote = {
    id: uuid.v4(), 
    title,
    content,
  };
  db.push(newNote); 
 
  res.status(201).json(newNote); // Respond with the newly created note
});

// Define a route to handle DELETE requests for deleting notes by ID
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params; 
  const index = db.findIndex(note => note.id === id); 
  if (index !== -1) {
    db.splice(index, 1); 
 
    res.sendStatus(204); 
  } else {
    res.status(404).json({ message: 'Note not found' }); 
  }
});

// Export the router to make it available for use in other files
module.exports = router;