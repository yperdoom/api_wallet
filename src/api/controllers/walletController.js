'use strict'

module.exports.balance = (requisition, response, next) => {

  response.send({ status: false, message: 'tu é um fudido meu irmão' })
}

module.exports.earnings = (requisition, response, next) => {

  response.send({ status: false, message: 'vendeu o cú?' })
}

module.exports.spending = (requisition, response, next) => {

  response.send({ status: false, message: 'comprou pica?' })
}
