// START IMPORT SECTION
const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = process.env.PORT || 3001;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to db
const db = mysql.createConnection(
	{
		host: "localhost",
		// My MySQL username,
		user: "root",
		// My password:
		password: "Rg*4y4avva@0fO!KB0!t",
		database: "election",
	},
	console.log("connected to the election database")
);

// END IMPORT SECTION ^^^

// START ROUTE SECTION

// test connection to database
/*
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
*/

// GET a single candidate
/*
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});
*/

// DELETE a candidate
/*
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
	if (err) {
		console.log(err);
	}
	console.log(result);
});
*/

// Create a candidate
/*
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
                VALUES (?, ?, ?, ?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
*/

// default response for any other request (not found)
app.use((req, res) => {
	res.status(404).end();
});

// END ROUTE SECTION

// function to connect and start Express.js server on port 3001. Needs to be at bottom
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
