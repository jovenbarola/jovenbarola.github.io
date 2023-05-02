const express = require('express');
const path = require('path');

// Create an instance of the express app
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '')));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
