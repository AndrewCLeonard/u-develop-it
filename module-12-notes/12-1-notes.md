# Lesson 12.1

## 12.1.2 Preview

Which of the following gameplans do you think is the best way to tackle this lesson?

_We need to create the MySQL database and set up the candidates table before we can create the schema and seed files. This will allow us to determine the structure of the database and table before we create the files that will pre-populate the database with data we can use to test the application._

| Step # | Module # | Task                                      | Description                                                                                                                                                |
| ------ | -------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | 12.1.3   | Set up the project files.                 | We'll start by creating a GitHub repository and setting up the folder structure.                                                                           |
| 2      | 12.1.4   | Create the database and candidates table. | We’ll connect to MySQL and create the first database. We’ll then add a table to the database to hold the data for the candidates.                          |
| 3      | 12.1.5   | Populate candidates table with data.      | The next step is to add data about the candidates to the table.                                                                                            |
| 3      | 12.1.6   | Save queries in schema and seed files.    | Create schema and seed files so that other developers can automatically create the database structure and pre-populate it with data from the command line. |

## 12.1.3 Set Up the Project

1. Create the Repo
1. Create the GihHub Issues
1. Clone the Repo and Create Branches
1. Set up teh Project Directory

### Create the Repo

### Create the GihHub Issues

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

### Clone the Repo and Create Branches

### Set up the Project Directory

## 12.1.4 Create the Election Database and Candidates Table

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

### Setup a Database

| Code                        | Description                   |
| --------------------------- | ----------------------------- |
| `CREATE DATABASE election;` | creates database              |
| `USE election`              | select the database to modify |

### Create the Candidates Table Using the MySQL CLI

```
CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
```

#### Explanations

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

### Create the Candidates Table

```
CREATE TABLE candidates (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
```

use `DESCRIBE candidates` to ensure it worked.

## 12.1.5 Populate Candidates Table with Data

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

### Query Examples

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

## 12.1.6 Save Queries in Schema and Seed Files

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

### Changing Tables 
#### `UPDATE` Operation.
```
UPDATE candidates
SET industry_connected = 1
WHERE id = 3;
```
#### `DELETE` Operation
```
DELETE FROM candidates
WHERE first_name = "Montague";
``` 
Preferable to use id to avoid typos. 