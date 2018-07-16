INSERT INTO doc_checks (checks, student_id, staff_id) 
values($1, $2, $3) returning *;