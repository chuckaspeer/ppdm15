CREATE TABLE classes (
	id SERIAL PRIMARY KEY,
	class_name VARCHAR(30) NOT NULL,
	class_desc TEXT NOT NULL,
	rm_number INTEGER NOT NULL,
    staff_id INTEGER REFERENCES staff(id)
)


INSERT INTO classes (
	class_name,
	class_desc,
	rm_number
)
VALUES (
	'P.E.',
	'Physical Education',
	101,
    1
)

CREATE TABLE Doc_Data (
	id SERIAL PRIMARY KEY,
	 Doc_checks TEXT NULL,
	Doc_Comments TEXT NULL,
    staff_id INTEGER REFERENCES students(id)
)

CREATE TABLE checkboxs (
	id SERIAL PRIMARY KEY,
	 checks varchar (200) NULL,
    staff_id INTEGER REFERENCES students(id)
)

CREATE TABLE doc_checks (
	id SERIAL PRIMARY KEY,
	 checks text [],
    staff_id INTEGER REFERENCES staff(id),
	student_id INTEGER REFERENCES students(id)

)

ALTER TABLE students 
ADD student_ck INTEGER NULL;


CREATE TABLE reports (
	id SERIAL PRIMARY KEY,
	 doc_checks INTEGER REFERENCES doc_checks(id),
	doc_comments INTEGER REFERENCES doc_comments(id),
    students INTEGER REFERENCES students(id),
    staff INTEGER REFERENCES staff(id)
)

CREATE TABLE students_classes (
	class_id INTEGER REFERENCES classes(id),
	student_id INTEGER REFERENCES students(id)
)

INSERT INTO students_classes (class_id, student_id)
VALUES (13,1),(13,2),(13,3),(14,4),(14,5),(14,6),(15,7),(15,8),(15,9),(16,10),(16,11),(16,1),(16,2);

CREATE TABLE staff (
	id SERIAL PRIMARY KEY,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	authid varchar(100) NOT NULL,
	email varchar(100)
)

INSERT INTO classes (class_name, class_desc, rm_number, staff_id) 
VALUES
	('Geometry', 'Geometry M2', 409, 1),
	('Eng 2', 'English 2', 101, 1),
	('Eng 1', 'English 1', 101, 1),
	('Business Eng', 'Professional Communication 1', 101, 1);

	