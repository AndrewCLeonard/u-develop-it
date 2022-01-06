# Lesson 12

## Lesson 12.1

set up and manage a db and table

-   create table
-   seed table with data
-   perform CRUD operations (create, read, update, delete) with SQL commands

### 12.1.2 Preview

Which of the following gameplans do you think is the best way to tackle this lesson?

_We need to create the MySQL database and set up the candidates table before we can create the schema and seed files. This will allow us to determine the structure of the database and table before we create the files that will pre-populate the database with data we can use to test the application._

| Step # | Module # | Task                                      | Description                                                                                                                                                |
| ------ | -------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | 12.1.3   | Set up the project files.                 | We'll start by creating a GitHub repository and setting up the folder structure.                                                                           |
| 2      | 12.1.4   | Create the database and candidates table. | We’ll connect to MySQL and create the first database. We’ll then add a table to the database to hold the data for the candidates.                          |
| 3      | 12.1.5   | Populate candidates table with data.      | The next step is to add data about the candidates to the table.                                                                                            |
| 3      | 12.1.6   | Save queries in schema and seed files.    | Create schema and seed files so that other developers can automatically create the database structure and pre-populate it with data from the command line. |

### 12.1.3 Set Up the Project

1. Create the Repo
1. Create the GihHub Issues
1. Clone the Repo and Create Branches
1. Set up teh Project Directory

#### Create the Repo

#### Create the GihHub Issues

**Title:**
Create a database that contains the candidates table

**Body:**
**User Story**

-   As a user, I can request a list of all potential candidates.
-   As a user, I can request a single candidate's information.
-   As a user, I want to delete a candidate.
-   As a user, I want to create a candidate.

**Title:**
Create the parties table

**Body:**
**User Story**

-   As a user, I can update a candidate's party affiliation.

-   As a user, I can request a single candidate's information, including party affiliation.

-   As a user, I can request a list of all the parties.

-   As a user, I can request a single party's information.

-   As a user, I can delete a party.

-   As a user, I can request a single candidate's information.

-   As a user, I want to delete a candidate.

-   As a user, I want to create a candidate.

**Title:**
Create the voters table

**Body:**
**User Story**

-   As a user, I can request a list of voters alphabetized by last name.
-   As a user, I can request a single voter's information.
-   As a user, I can create a voter.
-   As a user, I can update a voter's email.
-   As a user, I can delete a voter.

**Title:**
Create the votes table

**Body:**
**User Story**

-   As a user, I can tabulate all the votes cast by candidate ID in descending order.

-   As a user, I can cast a vote for a candidate.

#### Clone the Repo and Create Branches

#### Set up the Project Directory

### 12.1.4 Create the Election Database and Candidates Table

**GitHub Issue Title:**
Create a database that contains the candidates table

**User Story**

-   As a user, I can request a list of all potential candidates.
-   As a user, I can request a single candidate's information.
-   As a user, I want to delete a candidate.
-   As a user, I want to create a candidate.

| Term         | Definition                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **database** | Parent container that stores interrelated tables of data. Must be created first. A collection of interrelated data, stored in one or more tables that are related to each other |
| **table**    | rows and columns. Columns = fields, row = a record                                                                                                                              |
| **query**    | request for data from a database table or a combination of tables                                                                                                               |

#### Setup a Database

| Code                        | Description                   |
| --------------------------- | ----------------------------- |
| `CREATE DATABASE election;` | creates database              |
| `USE election`              | select the database to modify |

#### Create the Candidates Table Using the MySQL CLI

```
CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
```

##### Explanations

| Code                   | Explanation                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CREATE TABLE`         | duh                                                                                                                                                                                                                            |
| `VARCHAR`              | # of characters that this column's values can have. Data storage can get expensive, important to limit it.                                                                                                                     |
| `BOOLEAN`              | `0` or `1` typically, sometimes `true` or `false` with `0` or `1` assigned                                                                                                                                                     |
| `id`                   | primarily internal to MySQL to identify records                                                                                                                                                                                |
| `PRIMARY KEY`          | `id` designated by `PRIMARY KEY` and `AUTO_INCREMENT` attributes. <br> Each value in this column must be unique for each record. <br> used to link tables together <br> each table can have only one `PRIMARY KEY` designation |
| `AUTO_INCREMENT`       | increments with each successive row and assigns that new value to the `id`.                                                                                                                                                    |
| `NOT NULL`             | column _must_ contain a value                                                                                                                                                                                                  |
| `;`                    | SQL statements require a semicolon                                                                                                                                                                                             |
| `DESCRIBE candidates;` | describes table's fields (don't forget semicolon at end)                                                                                                                                                                       |

#### Create the Candidates Table

```
CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
```

use `DESCRIBE candidates` to ensure it worked.

### 12.1.5 Populate Candidates Table with Data

```
INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES ('Ronald', 'Firbank', 1);
```

| Code                     | Explanation                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `INSERT INTO candidates` | load data into `candidates` table                                    |
| parentheses              | columns we'll be inserting into, comma separated                     |
| `VALUES` with CSV        | data to load into the table <br> must match the order of the columns |
| `VARCHAR` values         | must be surrounded by quotes because they're strings                 |
| `;`                      | Don't forget the semicolons                                          |

#### Query Examples

`SELECT * FROM candidates;` shows everything (`*`= wildcard) from the `candidates` table.
`SELECT first_name, last_name FROM candidates;` will only show those 2 columns

```
SELECT first_name, industry_connected
FROM candidates
WHERE industry_connected = 1;
```

"`=`" in SQL is equivalent to "`===`" in JS.

```
SELECT first_name, last_name, industry_connected
FROM candidates
WHERE id = 5;
```

### 12.1.6 Save Queries in Schema and Seed Files

_How do we share database/table setup?_

Create `db.sql` and add:

```
UPDATE candidates
SET industry_connected = 1
WHERE id = 3;
```

Create `schema.sql` and add:

```
CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
```

You can't create a table or database that already exists, so need to use `DROP`: `mysql> DROP DATABASE election;`

-   To re-create, execute this in MySQL shell. `source` executes script files: `source db/db.sql`
-   add this to top of `db.sql`: `DROP DATABASE IF EXISTS election;`
-   run `source db/schema.sql` to create `candidates` table
-   use `DESCRIBE candidates;` to ensure it was created
-   create `seeds.sql` and add following:

```
INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES
  ('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 1),
  ('Piers', 'Gaveston', 0),
  ('Charles', 'LeRoi', 1),
  ('Katherine', 'Mansfield', 1),
  ('Dora', 'Carrington', 0),
  ('Edward', 'Bellamy', 0),
  ('Montague', 'Summers', 1),
  ('Octavia', 'Butler', 1),
  ('Unica', 'Zurn', 1);
```

-   `source db/seeds.sql`
-   verify it worked with `SELECT * FROM candidates;`

#### Changing Tables

##### `UPDATE` Operation.

```
UPDATE candidates
SET industry_connected = 1
WHERE id = 3;
```

##### `DELETE` Operation

```
DELETE FROM candidates
WHERE first_name = "Montague";
```

Preferable to use id to avoid typos.

## Lesson 12.2

create API routes to allow client web application to execute CRUD operations on the db

-   Connect to a MySQL database with a Node.js application.
-   Execute SQL queries in the Express.js routes using MySQL methods.
-   Test the API endpoint using Insomnia and the browser.

### 12.2.2 Preview

| Step # | Module # | Task                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------ | -------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | 12.2.3   | Set up the Node.js application with MySQL. | Connect to the MySQL database in the Node.js application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2      | 12.2.4   | Build the database calls.                  | Use mysql2 to make calls to the database to execute the SQL queries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3      | 12.2.5   | Create the GET routes.                     | Use Express.js to build the GET routes to perform the read operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4      | 12.2.6   | Create the DELETE route.                   | Use Express.js to build the DELETE routes to perform the delete operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5      | 12.2.7   | Create the POST route.                     | Use Express.js to build the POST routes to perform the create operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6      | 12.2.8   | Save your progress with Git.               | Finally, we’ll need to close the corresponding GitHub issue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 7      | 12.2.9   | Set up the Node.js application with MySQL. | Connect to the MySQL database in the Node.js application. Build the database calls. Use mysql2 to make calls to the database to execute the SQL queries. Create the GET routes. Use Express.js to build the GET routes to perform the read operations. Create the DELETE route. Use Express.js to build the DELETE routes to perform the delete operations. Create the POST route. Use Express.js to build the POST routes to perform the create operations. Save your progress with Git. Finally, we’ll need to close the corresponding GitHub issue. , |

We’ll need to set up the Node.js application and install the mysql2 package before we can make calls to the database and build the routes for the CRUD operations.

### 12.2.3 Set Up the Node.js Application with MySQL

1. Initialize Node.js and Create .gitignore File
1. Install npm Packages
1. Install and Set up Testing Using Jest
1. Check the Database
1. Create Connection to Express.js Server
1. Test the Express.js Connection
1. Review the server.js File
1. Connect to the MySQL Database

#### Initialize Node.js and Create .gitignore File

`npm init --y`

This will create `.gitignore and add node_modules to it, overwriting anything else pre-existing: `echo "node_modules/" > .gitignore`

#### Install npm Packages

`npm install express mysql2`
`npm install jest --save-dev`

#### Install and Set up Testing Using Jest

in `package.json`:

```
"scripts": {
  "test": "jest",
},
```

and...
`"start": "node server.js"` in `scripts` under `test`.

#### Check the Database

1. `mysql -u root -p` to run MySQL Server
1. `SHOW DATABASES;`
1. `USE election;`
1. `SHOW TABLES;`
1. `SELECT * FROM candidates;`

if any errors, start over with `source db/db.sql` to create the db again.

#### Create Connection to Express.js Server

```
// START IMPORT SECTION
const express = require("express");
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// END IMPORT SECTION

const PORT = process.env.PORT || 3001;

// function to start Express.js server on port 3001. Needs to be at bottom
app.listen(port, () => {
	console.log(`Server running on port ${PORT}`);
});
```

#### Test the Express.js Connection

##### Routes

Use this to test the connection, then delete it:

```
app.get("/", (req, res) => {
	res.json({
		message: "Hello World",
	});
});
```

Start server and check it's working at localhost:3001

#### Review the server.js File

```
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Connect to the MySQL Database

```
// Connect to db
const db = mysql.createConnection(
	{
		host: "localhost",
		// My MySQL username,
		user: "root",
		// My password:
		password: "REDACTED",
		database: "election",
	},
	console.log("connected to the election database")
);
```

### 12.2.4 Build the Database Calls

add to `server.js`above `catchall` route totest connectionto db

```
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});
```

-   `db` object using SQL's `query()` method
-   Once this method executes the SQL command, callback function capturs responses from qeury in two variables
    -   `err` for error response. If no errors, the `err` value is `null`.
    -   `rows` is the db query response.

#### Create MySQL Queries for Read, Delete, and Create Operations

##### Create Query for Read Operation
return a single candidate from the `candidates` table based on their `id.`

##### Create Query for Delete Operation

##### Create Query for Create Operation

