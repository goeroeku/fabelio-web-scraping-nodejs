// Update with your config settings.

module.exports = {
  server: {
    host: process.env.SERVER_ENV || "127.0.0.1",
    port: process.env.PORT_ENV || 3000
  },

  // knex development config
  development: {
    client: "postgresql",
    connection: {
      host: "10.42.179.130",
      user: "postgres",
      password: "secret",
      database: "fabelio_db",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/database/migrations"
    },
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  },

  // knex production config
  production: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST_ENV || "10.42.179.130",
      user: process.env.DB_USER_ENV || "postgres",
      password: process.env.DB_PASS_ENV || "secret",
      database: process.env.DB_NAME_ENV || "fabelio_db",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/database/migrations"
    },
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  }
};
