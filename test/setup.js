const Sequelize = require('sequelize')
const models = require(`../lib/models`)
const { database } = require('../lib/config')

const { host, user, pass, name, port, type } = database
const db = {}

const sequelize = new Sequelize(name, user, pass, {
  logging: false,
  dialect: type,
  host,
  port
})

Object.keys(models).forEach((modelName) => {
  db[modelName] = models[modelName](sequelize, Sequelize)
})

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
