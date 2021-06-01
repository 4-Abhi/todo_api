const express = require("express");
const eventController = require("../controllers/eventController");

const router = express.Router();

router
  .route("/")
  .get(eventController.GetAllEvent)
  .post(eventController.CreateEvent);

router
  .route("/:id")
  .get(eventController.GetEvent)
  .patch(eventController.UpdateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
