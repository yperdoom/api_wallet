'use strict'

module.exports.ping = async (requisition, response, next) => {
  response.send(requisition.headers.key)
}