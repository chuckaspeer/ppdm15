INSERT INTO doc_comments (comments, student_id, staff_id)
values ($2,$3, $4);

INSERT INTO doc_checks (checks, student_id, staff_id) 
values($1, $3, $4) ;