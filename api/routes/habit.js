const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const {
  getHabitsByName,
  createHabit,
  deleteHabit,
} = require("../controllers/habits");

router.get("/habits", authentication, getHabitsByName);
router.post("/createhabit", authentication, createHabit);
router.delete("/habits", authentication, deleteHabit);

module.exports = router;
