DROP DATABASE IF EXISTS grocery_db;

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceries (
    id INT AUTO INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
    quantity INT NOT NULL,
    cost DECIMAL(10, 2) NOT NULL
);

