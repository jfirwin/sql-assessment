module.exports = function(app){
  const express = require('express')
  const router = express.Router()

  router.get(`/users`, (req, res, next) => {
    app.get('db').users.get_all_users()
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.get(`/vehicles`, (req, res, next) => {
    app.get('db').vehicles.get_all_vehicles()
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.post(`/users`, (req, res, next) => {
    app.get('db').users.add_user({name: req.body.name, email: req.body.email})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.post(`/vehicles`, (req, res, next) => {
    app.get('db').vehicles.add_vehicle({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      owner_id: req.body.owner_id
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.get(`/user/:userId/vehiclecount`, (req, res, next) => {
    app.get('db').vehicles.count_users_vehicles({userId: req.params.userId})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.get(`/user/:userId/vehicle`, (req, res, next) => {
    app.get('db').vehicles.get_users_vehicles({userId: req.params.userId})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.get(`/vehicle`, (req, res, next) => {
    let key = Object.keys(req.query)[0]
    if(key === 'userEmail') {
      app.get('db').vehicles.get_vehicles_by_email({userEmail: req.query.userEmail})
        .then(response => {
          return res.status(200).send(response)
        })
        .catch(err => console.log(err))
    } else if (key === 'userFirstStart') {
      let letters = req.query.userFirstStart + '%'
      app.get('db').vehicles.get_vehicles_by_letters({userFirstStart: req.query.userFirstStart + '%'})
        .then(response => {
          return res.status(200).send(response)
        })
        .catch(err => console.log(err))
    }
  })

  router.get(`/newervehiclesbyyear`, (req, res, next) => {
    app.get('db').vehicles.get_newer_vehicles()
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.put(`/vehicle/:vehicleId/user/:userId`, (req, res, next) => {
    app.get('db').vehicles.update_vehicle_owner({
      vehicleId: req.params.vehicleId,
      userId: req.params.userId
    })
      .then(response => {
        console.log(req.params.userId, response)
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.delete(`/user/:userId/vehicle/:vehicleId`, (req, res, next) => {
    app.get('db').vehicles.delete_vehicle_owner({
      vehicleId: req.params.vehicleId,
      userId: req.params.userId
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  router.delete(`/vehicle/:vehicleId`, (req, res, next) => {
    app.get('db').vehicles.delete_vehicle({
      vehicleId: req.params.vehicleId,
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => console.log(err))
  })

  return router
}
