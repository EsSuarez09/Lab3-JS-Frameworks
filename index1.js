// Using Import/ES Module for this lab3
import express from 'express'; 

// Initializes the Express application and assigns it to the "app" variable
const app = express(); 

// Sets the port number (3000) for the server to listen on
const port = 3000;

// Define a route for the home page
// http://localhost:3000
app.get('/', (req, res) => {
    // Displaying our group names using any HTML elements
    res.send('<h1>Group18 Members</h1><ul><li>Maria Estrella Suarez</li><li>Yuka Nagase</li><li>Kevin Eduardo Sempertegui Vega</li></ul>');
});

// Start the server
app.listen(port, () => {
  console.log(`Group18 members' name are running on port http://localhost:${port}`);
});


