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
