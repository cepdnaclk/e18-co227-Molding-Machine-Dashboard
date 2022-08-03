CREATE DATABASE analysis_tool;

USE analysis_tool;

CREATE TABLE analysis_tool.employees(
    empID  VARCHAR(10) PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    empTitle VARCHAR(255) NOT NULL,
    admin BIT NOT NULL
);

CREATE TABLE analysis_tool.passwords(
    empID VARCHAR(10) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (empID) REFERENCES analysis_tool.employees(empID)
);
CREATE TABLE analysis_tool.molds(
    moldID  VARCHAR(10) PRIMARY KEY,
    monaNumber VARCHAR(255) NOT NULL,
    material VARCHAR(255) NOT NULL,
    moldMaker VARCHAR(255) NOT NULL
);

CREATE TABLE analysis_tool.machines(
    machineID VARCHAR(10) PRIMARY KEY,
    moldID VARCHAR(10) NOT NULL,
    FOREIGN KEY (moldID) REFERENCES analysis_tool.molds(moldID),
    moldShots INT NOT NULL,
    failedShots INT NOT NULL,
    prodRate INT NOT NULL,
    prod_start_date DATE NOT NULL,
    prod_end_date DATE NOT NULL
);

-- add dummy users to the employees table
INSERT INTO analysis_tool.employees(empID, firstName, lastName, empTitle, admin)
VALUES ('9876X', 'Jack', 'Reacher', 'Admin', 1),
        ('1234X', 'James', 'Greer', 'Engineer', 0),
        ('4321X', 'Anushaga', 'pavith', 'Admin', 1),
        ('0000X', 'Didula', 'Induwara', 'Admin', 1);

-- add dummy mold data to molds
INSERT INTO molds VALUES('m002','mon121','m_alloy','china'),
('m003','mon184','m_alloy','India'),
('m004','mon127','a_alloy','china'),
('m005','mon122','iron','India'),
('m006','mon854','carbon','USA');


-- add dummy machine data to machines
INSERT INTO machines VALUES('D01','m002',50,3,1,'2022-02-09','2022-03-19'),
('D02','m002',150,3,1,'2022-02-09','2022-03-19'),
('D03','m003',70,2,1,'2022-06-10','2022-06-19'),
('D04','m005',55,8,1,'2022-03-10','2022-03-31'),
('D05','m002',65,2,1,'2022-02-09','2022-03-19'),
('D06','m006',89,5,1,'2022-02-14','2022-03-25'),
('D07','m006',92,6,1,'2022-02-14','2022-03-25'),
('D08','m006',95,5,1,'2022-02-15','2022-03-25'),
('D09','m005',85,1,1,'2022-03-10','2022-03-31'),
('D10','m002',71,9,1,'2022-02-09','2022-03-19');
