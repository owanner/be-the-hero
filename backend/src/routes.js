const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//login
routes.post('/sessions', SessionController.create)


//listagem de ongs
routes.get('/ongs', OngController.index)

//cadastro de ongs
routes.post('/ongs', OngController.create)


//listagem de casos
routes.get('/incidents', IncidentController.index)

//cadastro de casos
routes.post('/incidents', IncidentController.create)

//deletar casos
routes.delete('/incidents/:id', IncidentController.delete)


//listar caso especifico
routes.get('/profile', ProfileController.index)



module.exports = routes