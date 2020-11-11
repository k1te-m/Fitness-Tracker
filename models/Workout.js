const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: "Please enter an exercise type."
          },
          name: {
              type: String,
              trim: true,
              required: "Please enter an exercise name."
          },
          distance: {
              type: Number
          },
          duration: {
              type: Number,
              required: "Please enter a exercise duration."
          },
          weight: {
              type: Number
          },
          sets: {
              type: Number
          },
          reps: {
              type: Number
          }
      }
  ]
},
{
    // Tells the database a virtual property will be used for this model
    toJSON: {
        virtuals: true
    }
}
);
// Set virtual for total duration
WorkoutSchema.virtual("totalDuration").get(function() {
    // reduce the array to a single value that sums all exercise durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout
