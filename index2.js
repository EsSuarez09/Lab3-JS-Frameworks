// Using Import/ES Module for this lab3
import express from "express";

// import the json content inside the data folder
import data from "./data/flights_data.json" assert { type: "json" };

// Initializes the Express application and assigns it to the "app" variable
const app = express();

// Sets the port number (3000) for the server to listen on
const port = 3000;

// http://localhost:3000/flights = endpoint is /flights
app.get("/flights", (req, res) => {
  // Handle the GET request
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(
    `The status of passengers' flights is running on port http://localhost:${port}/flights`
  );
});
