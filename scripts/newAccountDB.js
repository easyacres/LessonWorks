/*const mongoose = require("mongoose");
const db = require("../models/NewAccount");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const newAccountSeed = [
  {

  }
];

db.newAccount.remove({})
.then(() => db.newAccount.collection.insertMany(newAccountSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});*/