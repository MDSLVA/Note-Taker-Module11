const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const notesRoutes = require('./routes/notes');
const indexRoutes = require('./routes/index');

app.use('/api', notesRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});