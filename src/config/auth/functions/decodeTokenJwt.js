'use strict'

const jwt = require('jsonwebtoken')
const AUTH_SECRET = 'cu do bolsonaro'

module.exports = (token) => {
  return jwt.verify(token, AUTH_SECRET)
}