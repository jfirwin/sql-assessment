DELETE FROM vehicles
WHERE id = ${vehicleId}
RETURNING *
