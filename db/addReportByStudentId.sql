INSERT INTO reports (doc_checks, doc_comments, students, staff)
values ($1, $2, $3, $4)
returning *;