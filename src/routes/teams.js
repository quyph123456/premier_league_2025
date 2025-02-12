const express = require("express");
const teamsController = require("../app/controllers/TeamsController");
const router = express.Router();

router.get("/rating", teamsController.rate);
router.get("/:slug", teamsController.show);
router.get("/", teamsController.show);

module.exports = router;