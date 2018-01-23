UPDATE vehicles
SET owner_id = null
WHERE id = ${vehicleId}
RETURNING *
