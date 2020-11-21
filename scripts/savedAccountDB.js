/*const mongoose = require("mongoose");
const db = require("../models/SavedAccount");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const savedAccountSeed = [
  {
    first_name: "klemens",
    last_name: "sebrens",
    username: "ksebrens0",
    password: "w4zKIUgmIpsx",
    email: "ksebrens0@wp.com"
  },
  {
    first_name: "damaris",
    last_name: "daughtrey",
    username: "ddaughtrey1",
    password: "LKgpPK25QzR",
    email: "ddaughtrey1@51.la"
  },
  {
    first_name: "brion",
    last_name: "nester",
    username: "bnester2",
    password: "wcMzC7XfWBhL",
    email: "bnester2@salon.com"
  },
  {
    first_name: "dory",
    last_name: "luckhurst",
    username: "dluckhurst3",
    password: "ZY1Mw8n",
    email: "dluckhurst3@mit.edu"
  },
];

db.savedAccount.remove({})
.then(() => db.savedAccount.collection.insertMany(savedAccountSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});*/