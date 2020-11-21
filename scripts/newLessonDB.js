/*const mongoose = require("mongoose");
const db = require("../models/NewLesson");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const newLessonSeed = [
  {
    title: "JSON",
    course: "Intro",
    topic: "HOw to",
    synopsis: "This is the intro."  
  },
  {
    title: "React",
    course: "Hooks",
    topic: "useState",
    synopsis: "This is about useState."  
  },
  {
    title: "React",
    course: "Hooks",
    topic: "useEffect",
    synopsis: "This is the intro to useEffect."  
  },
  {
    title: "HTML",
    course: "Intro",
    topic: "HOw to create a form",
    synopsis: "This is the intro on creating forms."  
  },
];

db.newLesson.remove({})
.then(() => db.newLesson.collection.insertMany(newLessonSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});*/