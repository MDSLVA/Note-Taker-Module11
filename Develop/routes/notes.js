const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const notes = [];

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: uuid.v4(),
    title,
    content,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

module.exports = router;
