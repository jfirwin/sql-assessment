INSERT INTO vehicles (make, model, year, owner_id)
VALUES(${make}, ${model}, ${year}, ${owner_id})
RETURNING *
