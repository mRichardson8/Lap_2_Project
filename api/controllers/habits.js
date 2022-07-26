const Habit = require('../models/habit');

// HabitSchema.statics.getHabits = function(req, res) {
//     return new Promise((resolve, reject) => {
//         this.find((error, docs) => {
//             if (error) {
//                 console.error(error);
//                 return reject(error);
//             }
//             resolve(docs);
//         })
//     })
// }

const getHabitsByName = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        res.status(200).json({ habit });
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
}

const deleteHabit = async (req, res) =>{
    try {
        const habit = await Habit.findOneAndDelete(req.body);
        res.status(200).json(habit);
    } catch (err) {
       console.log(err);
        res.status(422).json({ message: err });
    }
}

module.exports = {
    getHabitsByName,
    createHabit,
    deleteHabit,
  };
