const express = require("express");
const futbollistatRouter = express.Router();
const futbollistatController = require("../controllers/futbollistat.controller");

futbollistatRouter.post("/", futbollistatController.postFutbollistat);
futbollistatRouter.get("/", futbollistatController.getFutbollistat);
futbollistatRouter.get("/:futbollistatId", futbollistatController.getFutbollistin);

module.exports = futbollistatRouter;

