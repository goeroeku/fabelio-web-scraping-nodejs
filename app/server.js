const cluster = require("express-cluster");
const express = require("express");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");
const cors = require("cors");

const config = require("knexfile").server;

const { printIp, handleAsyncExceptions } = require("app/util");
const routes = require("app/routes");

function run() {
  const app = express();

  app.set("root", `${__dirname}/..`);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());

  switch (process.env.NODE_ENV) {
    case "production":
      app.use(cors());
      app.set("trust proxy", "loopback");
      app.set("baseUrl", config.baseUrl);

      app.use(routes);

      cluster(worker =>
        app.listen(config.port, config.host, () => {
          console.log(`worker ${worker.id} online`);
        })
      );
      break;

    default:
      app.use(cors());
      app.use(errorhandler());
      app.set("baseUrl", config.baseUrl);

      app.use(routes);

      app.listen(config.port, config.host, () => {
        console.log(`app running on http://${config.host}:${config.port}`);
        printIp();
      });
      break;
  }
}

module.exports = run;

if (require.main === module) {
  handleAsyncExceptions();
  run();
}
