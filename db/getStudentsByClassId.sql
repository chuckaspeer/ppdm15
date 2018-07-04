SELECT st.*
FROM students st 
JOIN classes cl ON cl.id = st.class_id
WHERE cl.id = 1;