// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define the port number
const port = 3000;

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




// npm init -y 
// npm install express
// npm start