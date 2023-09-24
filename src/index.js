
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Akash123@",
  database: "ems",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM project";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
      return;
    }
    res.send(result);
  });
});

app.get('/api/search', (req, res) => {
  const { keyword } = req.query;

  // Use placeholders and parameterized queries to prevent SQL injection
  const sqlSearch = "SELECT * FROM project WHERE `Project_Title` LIKE ?";
  const searchKeyword = '%' + keyword + '%';

  db.query(sqlSearch, [searchKeyword], (error, result) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
      return;
    }
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

