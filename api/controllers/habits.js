const Habit = require('../models/habit');

HabitSchema.statics.getHabits = function(req, res) {
    return new Promise((resolve, reject) => {
        this.find((error, docs) => {
            if (error) {
                console.error(error);
                return reject(error);
            }
            resolve(docs);
        })
    })
}

HabitSchema.statics.getHabitsByName = function(req, res) {
    try {
        const habit = await Habit.findById(req.params.id);
        res.status(200).json({ habit });
      } catch (err) {
        res.status(500).send(err);
      }
}

HabitSchema.statics.create = function(req, res) {
    try {
         const habit = await Habit.create(req.body);
         res.status(201).json(habit);
     } catch (err) {
        console.log(err);
         res.status(422).json({ message: err });
     }
}

HabitSchema.statics.delete = function(req, res) {
    try {
        const habit = await Habit.findOneAndDelete(req.body);
        res.status(200).json(habit);
    } catch (err) {
       console.log(err);
        res.status(422).json({ message: err });
    }
}
