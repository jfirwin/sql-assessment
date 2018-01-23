SELECT users.name, vehicles.*
FROM users, vehicles
WHERE users.id = vehicles.owner_id
AND year > 2000
ORDER BY year DESC
