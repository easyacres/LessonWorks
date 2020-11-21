/*const mongoose = require("mongoose");
const db = require("../models/SavedLesson");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const savedLessonSeed = [
  {

  }
];

db.savedLesson.remove({})
.then(() => db.savedLesson.collection.insertMany(savedLessonSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});*/