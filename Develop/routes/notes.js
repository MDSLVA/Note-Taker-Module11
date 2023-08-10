const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const dbFilePath = path.join(__dirname, '..', 'db', 'db.json');

router.get('/notes', async (req, res) => {
  try {
    const data = await fs.readFile(dbFilePath, 'utf8');
    const notes = JSON.parse(data);
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/notes', async (req, res) => {
  try {
    const newNote = req.body;

    const data = await fs.readFile(dbFilePath, 'utf8');
    const notes = JSON.parse(data);

    newNote.id = uuidv4();
    notes.push(newNote);

    await fs.writeFile(dbFilePath, JSON.stringify(notes));
    
    res.json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
