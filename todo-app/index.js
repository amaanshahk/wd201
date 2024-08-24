/* eslint-disable no-unused-vars */
const express = require("express");
const app = express();

app.get("/todos", (request, response) => {
  //   response.send("Hello World");
  console.log("To do list.");
});

app.post("/todos", (request, response) => {
  console.log("Creating a to do.");
});

app.put("/todo/:id/markAsCompleted", (request, response) => {
  console.log("Marking a to do as done by ID: ", request.param.id);
});

app.delete("/todo/:id", (request, response) => {
  console.log("Delete to do by ID: ", request.params.id);
});
app.listen(3000);
