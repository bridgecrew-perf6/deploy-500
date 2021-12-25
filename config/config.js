require("dotenv").config()

module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
