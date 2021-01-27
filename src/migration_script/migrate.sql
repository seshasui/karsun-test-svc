CREATE TABLE IF NOT EXISTS Employees (
    id INTEGER auto_increment , 
    fullName VARCHAR(255), 
    employeeEmail VARCHAR(255), 
    role VARCHAR(255), 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL, 
    PRIMARY KEY (id)
);



INSERT INTO Employee values(1,'Walter White', 'white@abc.com', 'Developer', now(), now());
INSERT INTO Employee values(2,'Jesse Pinkman', 'pinkman@abc.com', 'Manager', now(), now());