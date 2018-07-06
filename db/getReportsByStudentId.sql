SELECT students.first_name, students.last_name, doc_checks.checks, doc_comments.comments
FROM doc_checks
JOIN doc_comments ON doc_checks.student_id = doc_comments.student_id
JOIN students ON doc_checks.student_id = students.id
WHERE students.id = $1;