const express = require("express");
const router = express.Router();

const { getHabitsByName, createHabit, deleteHabit } = require("../controllers/habits");

router.post("/habits", getHabitsByName);
router.post("/createhabit", createHabit);
router.post("/deletehabit", deleteHabit);

module.exports = router;
