// Using Import/ES Module for this lab3
import express from "express";

// import the json content inside the data folder
import data from "./data/flights_data.json" assert { type: "json" };

// Initializes the Express application and assigns it to the "app" variable
const app = express();

// Sets the port number (3000) for the server to listen on
const port = 3000;

// Define a route for the home page
// http://localhost:3000
app.get("/", (req, res) => {
  // Displaying our group names using any HTML elements
  res.send(
    "<h1>Group18 Members</h1><ul><li>Maria Estrella Suarez</li><li>Yuka Nagase</li><li>Kevin Eduardo Sempertegui Vega</li></ul>"
  );
});

//http://localhost:3000/create
app.post("/create", (req, res) => {
  // Handle the POST request
  res.send(
    "<h1>POST method</h1><ul><h3>I am creating a new flights.</h3></ul>"
  );
});

//http://localhost:3000/read
app.get("/read", (req, res) => {
    // Handle the GET request
    res.json(data);
});

//http://localhost:3000/update
app.put("/update", (req, res) => {
  // Handle the PUT request
  res.send(
    "<h1>PUT method</h1><ul><h3>I am updating some changes for passengers.</h3></ul>"
  );
});

//http://localhost:3000/delete
app.delete("/delete", (req, res) => {
  // Handle the DELETE request
  res.send(
    "<h1>DELETE method</h1><ul><h3>I am deleting the names of invalid passengers.</h3></ul>"
  );
});

// Start the server
app.listen(port, () => {
  console.log(
    `Our example of CRUD methods is running on port http://localhost:${port} and can be tested on Postman`
  );
});
