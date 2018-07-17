-- SELECT students.first_name, students.last_name, doc_checks.checks, doc_comments.comments
-- FROM reports 
-- JOIN doc_comments ON doc_checks.student_id = doc_comments.student_id
-- JOIN students ON doc_checks.student_id = students.id
-- JOIN staff ON doc_checks.staff_id = staff.id
-- WHERE students.id = $1;

SELECT re.id AS report_id, co.id AS comment_id, students.first_name, students.last_name, ch.checks, co.comments, staff.first_name as staff_first_name, staff.last_name as staff_last_name FROM reports re
JOIN doc_checks ch ON ch.id = re.doc_checks
JOIN doc_comments co ON co.id = re.doc_comments
JOIN students ON students.id = re.students
JOIN staff ON staff.id = re.staff
WHERE students.id = $1;


