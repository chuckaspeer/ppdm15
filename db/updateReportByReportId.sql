-- UPDATE doc_comments
-- SET comments
-- WHERE report_id ($1);

-- UPDATE reports set doc_comments.id = ($1)
-- WHERE report_id =($2)

UPDATE doc_comments
SET comments = $1
WHERE id = $2
returning *;



