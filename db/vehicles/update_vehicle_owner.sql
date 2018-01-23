UPDATE vehicles
SET owner_id = ${userId}
WHERE id = ${vehicleId}
RETURNING *
