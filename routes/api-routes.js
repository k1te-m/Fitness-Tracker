const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();

apiRouter.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

apiRouter.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then((newWorkout) => {
    res.json(newWorkout);
  });
});

// apiRouter.put("/api/workouts/:id", (req, res) => {
//   db.Workout.findOneAndUpdate(
//     { _id: req.params.id },
//     { $push: { exercises: req.body } },
//     (updatedWorkout) => {
//       res.json(updatedWorkout);
//     }
//   );
// });

module.exports = apiRouter;
