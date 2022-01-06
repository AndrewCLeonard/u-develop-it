// START IMPORT SECTION
const express = require("express");
const res = require("express/lib/response");
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

// GET all candidates
app.get("/api/candidates", (req, res) => {
	const sql = `SELECT * FROM candidates`;

	db.query(sql, (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: rows,
		});
	});
});
// GET a single candidate
app.get("/api/candidate/:id", (req, res) => {
	const sql = `SELECT * FROM candidates WHERE id = ?`;
	const params = [req.params.id];

	db.query(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: row,
		});
	});
});

// DELETE a candidate
app.delete("/api/candidate/:id", (req, res) => {
	const sql = `DELETE FROM candidates WHERE id = ?`;
	const params = [req.params.id];

	db.query(sql, params, (err, result) => {
		if (err) {
			res.statusMessage(400).json({ error: res.message });
		} else if (!result.affectedRows) {
			res.json({
				message: "Candidate not found",
			});
		} else {
			res.json({
				message: "deleted",
				changes: result.affectedRows,
				id: req.params.id,
			});
		}
	});
});

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
