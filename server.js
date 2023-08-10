// Import the Express.js library
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port to listen on; use the environment's port or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware: Parse incoming url-encoded data and JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware: Serve static files from the 'public' directory
app.use(express.static('public'));

// Import the route handlers for notes and index
const notesRoutes = require('./routes/notes');
const indexRoutes = require('./routes/index');

// Middleware: Use the notesRoutes for paths starting with '/api'
app.use('/api', notesRoutes);

// Middleware: Use the indexRoutes for the root path '/'
app.use('/', indexRoutes);

// Start the server on the specified port
app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`);
});
