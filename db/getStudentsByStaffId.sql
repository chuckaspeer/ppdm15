SELECT DISTINCT s.* FROM students s
JOIN students_classes sc ON s.id = sc.student_id
JOIN classes cl ON cl.id = sc.class_id
JOIN staff t ON  t.id = cl.staff_id
WHERE t.id = $1;