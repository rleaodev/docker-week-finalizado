const mongoose = require('mongoose')

const _conn = () => process.env.MONGO_URL || 'mongodb://localhost:27017'

mongoose
  .connect(_conn(), {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoCreate: true
  })
  .catch(err => {
    console.log(err);
  });

const db = mongoose.connection

db.on('connected', () => {
  console.log('Mongoose default connection is open')
})

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`)
})

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected')
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination')
    process.exit(0)
  })
})

module.exports = mongoose
