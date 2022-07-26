const Habit = require("../models/habit");

const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ createdBy: req.user.userId });
    res.status(200).json({ habits });
  } catch (err) {
    res.status(500).send(err);
  }
};

const createHabit = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const habit = await Habit.create(req.body);
    res.status(201).json(habit);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: err });
  }
};

const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { createdBy: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({ habit });
  } catch (err) {
    res.status(417).send(err);
  }
};

const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({ createdBy: req.user.userId });
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: err });
  }
};

module.exports = {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
};
