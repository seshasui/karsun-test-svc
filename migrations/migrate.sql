CREATE TABLE IF NOT EXISTS Minimum_Requirements (
    id INTEGER auto_increment , 
    GSA_Components VARCHAR NOT NULL,
    GSA_Min_Req VARCHAR NOT NULL,
    Rev_Ambulance VARCHAR NOT NULL,
    HALCORE VARCHAR NOT NULL,
    AMB VARCHAR NOT NULL
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL, 
    PRIMARY KEY (id)
);


INSERT INTO Minimum_Requirements values(1, 'APP - AMBULANCE BUILDER PREP','PKG','Comply','Comply', 'Comply',  now(), now());
INSERT INTO Minimum_Requirements values(2, 'XLT - TRIM LEVEL','N/A','Comply','Comply', 'Comply', now(), now());
INSERT INTO Minimum_Requirements values(3, 'MFMC - MFG. MODEL CODE MAV','1170IH','1153D','1153D', 'Comply', now(), now());
INSERT INTO Minimum_Requirements values(4, 'GVWR - GROSS VEHICLE WEIGHT','19500','19500','Comply', 'Comply', now(), now());
INSERT INTO Minimum_Requirements values(5, 'PAY - PAYLOAD lbs','4000','Comply','4000', 'Comply' now(), now());
INSERT INTO Minimum_Requirements values(6, 'T2 - AUTOMATIC TRANSMISSION','Comply','Comply', 'Comply', 'Comply', now(), now());