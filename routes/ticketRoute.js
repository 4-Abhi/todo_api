const express = require("express");
const ticketController = require("../controllers/ticketController");

const router = express.Router();

router
  .route("/")
  .get(ticketController.GetAllTicket)
  .post(ticketController.CreateTicket);

router
  .route("/:id")
  .patch(ticketController.UpdateTicket)
  .delete(ticketController.deleteTicker);

module.exports = router;
