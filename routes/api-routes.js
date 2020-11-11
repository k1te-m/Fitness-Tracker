const express = require("express");
const db = require("../models/index");
const apiRouter = express.Router();

apiRouter.get("/api/workouts", (req, res) => {
   db.Workout.find()
     .then(allWorkouts => {
         res.json(allWorkouts);
     })
     .catch(error => {
         res.json(error);
     })
})

apiRouter.post("/api/workouts", (req, res) => {
    db.Workout.create()
      .then(newWorkout => {
          res.json(newWorkout);
      })
      .catch(error => {
          res.json(error);
      });
})
// apiRouter.post("/api/workouts", (req, res) => {
//   db.Workout.create(),(error, results) => {
//     if (error) {
//         throw error;
//     } else {
//         console.log(results);
//         res.json(results);
//     }
//   }
// });

// apiRouter.put("/api/workouts/:id", (req, res) => {
//   const filter = { _id: req.params.id };
//   const update = req.body;
  
//   db.Workout.findOneAndUpdate({ _id: req.params.id }, {$push: {exercises: update}}).then(updatedWorkout => {
//       res.json(updatedWorkout);
//   });
// });

module.exports = apiRouter;
