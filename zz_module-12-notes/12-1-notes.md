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

## 12.1.4

open MySQL Shell with `mysql -u root -p`

## 12.3

### 12.3.1

Adding party data will give us a chance to build on past experience by doing the following tasks:

-   Creating a new table using MySQL.
-   Populating the new table with data.
-   Creating API routes to retrieve this data via HTTP requests.

Along the way, you'll learn some new tricks, including how to do the following:

-   Update a schema to accommodate new fields.
-   Combine data from two separate tables.
-   Implement constraints to avoid bad data from persisting.

### 12.3.2

_The candidate routes won’t be able to join with the party data and return this combined data until the candidates table includes a party reference._

1. Create and populate a parties table. You'll need some party data before you can make progress on any other step.
1. Update the candidates table to reference parties. Once you have a parties table, you can update the candidates table to reference it.
1. Update candidate routes to join with party data. Update the existing route to return the combined data.
1. Create API routes for parties. The routes for parties are fairly straightforward, so it would be helpful to take care of them now.
1. Add a candidate route to change their party. Finally, you can tackle the trickier route of updating an existing record.

### 12.3.3

### 12.3.4

important!

-   SQL `ALTER TABLE` STATEMENT = add a new field, delete an existing field, or modify a field.
-   `DESCRIBE <table name>` = show all details about a tale
-   `CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE SET NULL`
