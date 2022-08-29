const dotenv = require('dotenv')

dotenv.config()

const config = {
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    type: process.env.DB_TYPE
  },
  url: process.env.DB_URL,
}

module.exports = config
