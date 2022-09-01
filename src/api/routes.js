const bodyParser = require('body-parser')
const express = require('express')
const PORT = 4030
const app = express()

const {authentication} = require('../config/auth/authentication')

const apiController = require('./controllers/apiController')
const loginController = require('./controllers/loginController')
const walletController = require('./controllers/walletController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login', loginController.login)

app.all('/*', authentication)

app.get('/ping', apiController.ping)
app.get('/wallet/balance', walletController.balance)
app.post('/wallet/earnings', walletController.earnings)
app.post('/wallet/spending', walletController.spending)


app.listen(PORT)
