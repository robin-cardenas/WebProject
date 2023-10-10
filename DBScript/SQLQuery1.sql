create database dbWebAPI;

use dbWebAPI;

CREATE TABLE tblEmployee (
    employeeID INT PRIMARY KEY identity (1,1) NOT NULL,
    document INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    eMail VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    gender CHAR(1) CHECK (gender IN ('M', 'F')) NOT NULL
);
