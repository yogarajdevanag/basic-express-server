const express = require('express');
const app = express();
const PORT = 3000;

// THIS IS THE FIX: Add a route handler for the root path ('/')
// This tells Express what to do when someone visits http://localhost:3000
app.get('/', (req, res) => {
  // 'res.send()' sends a response back to the browser
  res.send('<h1>Success! My server is responding.</h1>');
});

// This part is correct and starts the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Access it at http://localhost:${PORT}`);
});