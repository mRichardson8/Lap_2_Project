const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 50
  },
  habits: {
    type: Array, 
    required: [true, "Please choose at least one habit!"]
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],

  }
})

const habit = db.model('Habit', HabitSchema);
