const express = require("express");
const app = express();

app.get("/", (request, response, next) => {
  response.send("hejo");
});
app.get("/user", (request, response, next) => {
  response.send("drugie hej");
});
app.listen(3000, () => {
  console.log("example app is working on port 3000");
});

// app.METHOD(PATH, HANDLER);
