const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lessonplanfinder"
  //                    ^Database Name^
);

const LessonMainSeed = [

{
  author: "JSON",
  title: "Intro",
  synopsis: "This is the intro.",  
  date: new Date(Date.now())
},
{
  author: "React",
  title: "Hooks",
  synopsis: "This is about useState." ,
  date: new Date(Date.now()) 
},
{
  author: "React",
  title: "Hooks",
  synopsis: "This is the intro to useEffect.",
  date: new Date(Date.now())  
},
{
  title: "HTML",
  course: "Intro",
  synopsis: "This is the intro on creating forms.",  
  date: new Date(Date.now())
},

];

db.LessonsMain
//  ^^Reports to Index.js in Models
  .remove({})
  .then(() => db.LessonsMain.collection.insertMany(LessonMainSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
