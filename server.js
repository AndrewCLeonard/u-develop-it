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

// END IMPORT SECTION

// START ROUTE SECTION

// test connection to database
db.query(`SELECT * FROM candidates`, (err, rows) => {
	console.log(rows);
});

// default response for any other request (not found)
app.use((req, res) => {
	res.status(404).end();
});

// END ROUTE SECTION

// function to connect and start Express.js server on port 3001. Needs to be at bottom
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
