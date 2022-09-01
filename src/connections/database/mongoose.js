'use strict'

const mongoose = require('mongoose')

const { MONGO_ENDPOINT } = 'mongodb+srv://yperdoom:n9rReT2A5jeIQWpq@wallet.vufsg.mongodb.net/?retryWrites=true&w=majority'

let conn = null

module.exports.connect = async () => {

  if (conn == null) {
    try {
      conn = await mongoose.connect(MONGO_ENDPOINT)
    } catch (error) {
      // console.log(error)
      conn = null
    }
  }

  return conn
}

module.exports.disconnect = async () => {

  try {
    return await mongoose.disconnect(MONGO_ENDPOINT)
  } catch (error) {
    console.log(error)
  }
}