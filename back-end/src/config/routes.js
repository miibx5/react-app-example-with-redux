const express = require("express");

module.exports = function (server) {
    const router = express.Router();
    server.use("/api", router);

    const service = require("../api/react-app-example/react-app-example-service");
    service.register(router, "/todos");
}