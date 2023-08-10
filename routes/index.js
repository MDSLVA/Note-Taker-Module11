// Import the required modules
const express = require('express'); 
const router = express.Router(); 
const path = require('path'); 

// Define a route to handle GET requests for the root path ('/')
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Define a route to handle GET requests for the '/notes' path
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Export the router to make it available for use in other files
module.exports = router;
