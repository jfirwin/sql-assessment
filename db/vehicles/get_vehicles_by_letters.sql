SELECT * FROM vehicles
WHERE owner_id = (
  SELECT id FROM users
  WHERE name LIKE ${userFirstStart}
)
