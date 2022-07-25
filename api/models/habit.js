<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const { connectDB } = require("../db/connect");
>>>>>>> a0ab063dec881ae70cb32fecbab7e177cacb9649

const HabitSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 50
  },
  habits: {
    type: Array, 
    
  }
<<<<<<< HEAD

=======
  static delete(habit) {
  return new Promise(async (res, rej) => {
    try {
        const db = await init();
        const createHabit = await db
          .collection("habitsTracker")
          .findOneAndDelete(
            { username: habit.username },
            { $push: { habit: habit.habit } }
          );
        res(createHabit);
      } catch (err) {
        rej(`Error deleting habits: ${err}`);
      }
  })
}
  static findByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        const user = await db
          .collection("habitsTracker")
          .findOne({ username: username });
        res(user);
      } catch (err) {
        rej(`Error retrieving habits: ${err}`);
      }
    });
  }
  static get findHabitByUsername() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const dbData = await db
          .collection("habitsTracker")
          .find({ username: habit.username });
        const findUserHabits = dbData.map((d) => new Habit(d));
        if (!findUserHabits.length) {
          throw new Error(
            "You don't have any habits that you are tracking at the moment!"
          );
        }
        resolve(findUserHabits);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }
}
>>>>>>> a0ab063dec881ae70cb32fecbab7e177cacb9649


    
})

const habit = db.model('Habit', HabitSchema);







// class Habit {
//   constructor(data) {
//     this.username = data.username;
//     this.habit = data.habit;
//     this.frequency = data.frequency;
//     this.status = data.status;
//   }
//   static get all() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await connectDB();
//         const dbData = await db.collection("habitsTracker").find({}).toArray();
//         const allHabits = dbData.map((d) => new Habit(d));
//         if (!allHabits.length) {
//           throw new Error(
//             "You don't have any habits that you are tracking at the moment!"
//           );
//         }
//         resolve(allHabits);
//       } catch (err) {
//         reject(`Error retrieving habits: ${err.message}`);
//       }
//     });
//   }
//   static create(habit) {
//     return new Promise(async (res, rej) => {
//       try {
//         const db = await connectDB();
//         const createHabit = await db
//           .collection("habitsTracker")
//           .findOneAndUpdate(
//             { username: habit.username },
//             { $push: { habit: habit.habit } }
//           );
//         res(createHabit);
//       } catch (err) {
//         rej(`Error creating habits: ${err}`);
//       }
//     });
//   }

//   static findByUsername(username) {
//     return new Promise(async (res, rej) => {
//       try {
//         const db = await connectDB();
//         const user = await db
//           .collection("habitsTracker")
//           .findOne({ username: username });
//         res(user);
//       } catch (err) {
//         rej(`Error retrieving habits: ${err}`);
//       }
//     });
//   }
//   static get findHabitByUsername() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await connectDB();
//         const dbData = await db
//           .collection("habitsTracker")
//           .find({ username: habit.username });
//         const findUserHabits = dbData.map((d) => new Habit(d));
//         if (!findUserHabits.length) {
//           throw new Error(
//             "You don't have any habits that you are tracking at the moment!"
//           );
//         }
//         resolve(findUserHabits);
//       } catch (err) {
//         reject(`Error retrieving habits: ${err.message}`);
//       }
//     });
//   }
// }

// module.exports = Habit;
