const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const {
  getHabitsByName,
  createHabit,
  deleteHabit,
} = require("../controllers/habits");

router.post("/habits", authentication, getHabitsByName);
router.post("/createhabit", authentication, createHabit);
router.post("/deletehabit", authentication, deleteHabit);

module.exports = router;
