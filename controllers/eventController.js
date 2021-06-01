const Event = require("../models/eventSchema");

exports.GetAllEvent = async (req, res) => {
  try {
    const event = await Event.find();
    console.log("event iiii", event);
    return res.status(201).json({
      status: "Success",
      data: event,
    });
  } catch (err) {
    console.log("errrr", err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.CreateEvent = async (req, res) => {
  try {
    console.log("req......", req.body);
    const event = await Event.create(req.body);
    console.log("Evente issss", event);

    if (!event) {
      return res.status(400).json({
        status: "fail",
        message: "Fail To  Create Event",
      });
    }

    return res.status(200).json({
      status: "succes",
      data: event,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.GetEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(400).json({
        status: "fail",
        message: "event Cant find",
      });
    }
    res.status(200).json({
      status: "success",
      data: event,
    });
  } catch (er) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.UpdateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return res.status(404).json({
        status: "error",
        message: "event Not Found",
      });
    }
    res.status(201).json({
      status: "success",
      data: event,
    });
  } catch (er) {
    res.status(404).json({
      status: "fail",
      message: "Fail To Create event",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndRemove(req.params.id);
    if (!event) {
      return res.status(404).json({
        status: "error",
        message: "event Not Found",
      });
    }
    res.status(201).json({
      status: "success",
      message: "event Removed Succesfully",
    });
  } catch (er) {
    res.status(404).json({
      status: "fail",
      message: "Fail To Delte event",
    });
  }
};
