INSERT INTO staff (first_name, last_name, authid, email)
VALUES ($1, $2, $3, $4)
returning *;