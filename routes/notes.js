const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const path = require('path'); 

const db = require('../db/db.json');

router.get('/notes', (req, res) => {
  res.json(db);
});

router.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: uuid.v4(),
    title,
    content,
  };
  db.push(newNote);
 
  res.status(201).json(newNote);
});

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

module.exports = router;