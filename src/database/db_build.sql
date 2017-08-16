BEGIN;

DROP TABLE IF EXISTS cohorts ,mentors, weeks,cohort_mentor ;

CREATE TABLE IF NOT EXISTS cohorts  (
    id  SERIAL  PRIMARY KEY NOT NULL,
    location   VARCHAR(10) NOT NULL,
    num   INTEGER,
    start_date   DATE
);


INSERT INTO cohorts (location ,num,start_date) VALUES ('London',10,'25-Nov-2017'),
('Gaza',1,'25-Nov-2017'),
('Nazareth',2,'09-July-2017'),
('Gaza',2,'09-July-2017');




CREATE TABLE IF NOT EXISTS mentors  (
    githubuser  VARCHAR(20) PRIMARY KEY
);

INSERT INTO mentors (githubuser) VALUES ('Abdallah'),
 ('Mahmud'),
 ('Salwa'),
 ('Ali'),
 ('Sohad'),
 ('Ahmed'),
 ('Amin'),
 ('Aya'),
 ('hana'),
 ('Waleed'),
 ('Samer'),
 ('Eslam'),
 ('Sabrin'),
 ('Zooey'),
 ('Amy');


CREATE TABLE IF NOT EXISTS weeks (
    num  INTEGER   PRIMARY KEY NOT NULL ,
    week_title VARCHAR(40)
);
INSERT INTO weeks (num ,week_title) VALUES (1 ,'Toolkit'),
 (2 ,'Testing'),
 (3,'APIs'),
 (4,'Node.js 1/2'),
 (5,'Node.js 2/2'),
 (6,'PostgreSQL'),
 (7,'Authentication'),
 (8,'Express'),
 (10,'self-selected project'),
 (11,'self-selected project'),
 (12,'self-selected project'),
 (13,'self-selected project'),
 (14,'self-selected project'),
 (15,'self-selected project'),
 (16,'self-selected project');


CREATE TABLE IF NOT EXISTS cohort_mentor (
    cohort_id  INTEGER  REFERENCES cohorts(id),
    mentor_user VARCHAR(20) REFERENCES mentors(githubuser),
    week_num   INTEGER  REFERENCES weeks(num),
    PRIMARY KEY (cohort_id,mentor_user,week_num)
);



INSERT INTO   cohort_mentor (cohort_id ,mentor_user ,week_num) VALUES
(2,'Ali',2),
(1,'Zooey',5),
(2,'Abdallah',7),
(2,'Mahmud',7);




 COMMIT;
