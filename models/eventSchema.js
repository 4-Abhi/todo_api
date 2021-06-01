const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A User Must Have Name"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Must have description"],
  },

  location: {
    type: String,
  },

  organizer: {
    type: String,
  },
  eventstatus: {
    type: String,
    enum: ["done", "created", "pending"],
    default: "created",
  },
});

module.exports = mongoose.model("event", eventSchema);
