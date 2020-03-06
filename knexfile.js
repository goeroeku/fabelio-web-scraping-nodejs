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
      host:
        process.env.DB_HOST_ENV || "ec2-3-231-46-238.compute-1.amazonaws.com",
      user: process.env.DB_USER_ENV || "cznmqsdijsunpo",
      password:
        process.env.DB_PASS_ENV ||
        "8b36db57e2672ed9c54fb84e85f7f5b6c8a80fe2d21bb2fd1aca4d3b5afe52b6",
      database: process.env.DB_NAME_ENV || "d9j9qvvbf0bcqd",
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
