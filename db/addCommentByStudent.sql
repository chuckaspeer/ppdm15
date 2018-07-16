INSERT INTO doc_comments (comments, student_id, staff_id)
values ($1,$2, $3) returning *;

