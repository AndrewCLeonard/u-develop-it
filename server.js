// IMPORT SECTION
const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api", apiRoutes);

// default response for any other request (not found)
app.use((req, res) => {
	res.status(404).end();
});

// function to connect and start Express.js server on port 3001. Needs to be at bottom
db.connect((err) => {
	if (err) throw err;
	console.log("Database connected.");
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
