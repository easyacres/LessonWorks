/*const mongoose = require("mongoose");
const db = require("../models/AdminAccount");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const adminAccountSeed = [
  {

  }
];

db.adminAccount.remove({})
.then(() => db.adminAccount.collection.insertMany(adminAccountSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
*/