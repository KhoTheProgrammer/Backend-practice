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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const response = await client.query("select * from users");
    res.json(response.rows);
    console.log(response.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/users/:id", (req, res) => {});

app.post("/api/users", async (req, res) => {
  try {
    const { id, fname, lname, username, password } = req.body;
    const user = await client.query(
      `insert into users values ($1, $2, $3, $4, $5)`,
      [Number(id), fname, lname, username, password]
    );
    res.json(user.rows)
    console.log(user.rows);
  } catch (err) {
    res.json(err.message)
  }
});

app.listen(5000, () => {
  console.log("Server listening at http://localhost:5000");
});
