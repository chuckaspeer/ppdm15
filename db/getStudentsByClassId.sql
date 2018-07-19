SELECT s.*
FROM students_classes sc
JOIN classes ci ON ci.id = sc.class_id
JOIN students s ON s.id = sc.student_id
WHERE ci.id = $1;