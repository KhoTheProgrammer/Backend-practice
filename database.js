const express = require("express");
const app = express();
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "kondwani",
  port: "5432",
});

client.connect();

let data = [];
client.query("select * from users", (error, result) => {
  if (error) {
    throw error;
  }
  data = result.rows;
  console.log(data);
  client.end();
});

app.get("/api/users", (req, res) => {
  res.json(data);
});
app.listen(5000, () => {
  console.log("Server listening at http://localhost:5000");
});
