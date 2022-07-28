const mockingoose = require("mockingoose");

const HabitModel = require("../../models/habit");

describe("test mongoose Habit model", () => {
  it("should return a habit", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      name: "name",
      habits: "name@email.com",
      //   createdBy: req.user.userId,
    };

    mockingoose(HabitModel).toReturn(_doc, "findOne");

    return HabitModel.findOne({ _id: "507f191e810c19729de860ea" }).then(
      (doc) => {
        expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
      }
    );
  });

  it("should  create a habit", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      name: "name",
      habits: "name@email.com",
      createdBy: req.user.userId,
    };

    mockingoose(HabitModel).toReturn(_doc, "create");

    return HabitModel.create({ _doc }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });

  it("should  update a habit", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      name: "name",
      habits: "name@email.com",
    };

    mockingoose(HabitModel).toReturn(_doc, "findOneAndUpdate");

    return HabitModel.findOneAndUpdate({ _doc }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
