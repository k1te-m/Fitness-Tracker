const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();

apiRouter.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((error) => {
      res.json(error);
    });
});

apiRouter.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((error) => {
      res.json(error);
    });
});

apiRouter.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((workout) => {
      console.log(workout);
      res.json(workout);
    })
    .catch((error) => {
      res.json(error);
    });
});

apiRouter.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(allWorkouts => {
          while (allWorkouts.length > 7) {
              let first = allWorkouts.shift();
          }
          res.json(allWorkouts);
      })
})

module.exports = apiRouter;
