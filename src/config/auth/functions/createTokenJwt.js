'use strict'

const jwt = require('jsonwebtoken')
const AUTH_SECRET = 'cu do bolsonaro'

module.exports = (payload) => {
  return jwt.sign(payload, AUTH_SECRET)
}