const express = require("express");
const teamsController = require("../app/controllers/TeamsController");
const router = express.Router();

router.get("/rating", teamsController.rate);
router.get("/create", teamsController.create);
router.get("/delete", teamsController.trash);
router.post("/store", teamsController.store);
router.get("/:id/edit", teamsController.edit);
router.delete("/:id", teamsController.delete);
router.delete("/:id/force", teamsController.forceDelete);
router.patch("/:id", teamsController.restore);
router.put("/:id", teamsController.update);
router.get("/:slug", teamsController.show);
router.get("/", teamsController.show);

module.exports = router;