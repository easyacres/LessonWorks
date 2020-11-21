/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let savedAccountSchema = new Schema({
  // url string for thumbnail image
  //thumbnail: {
    //type: String,
    //default: ""
  //},
  // teacher name
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  // username
  username: {
    type: String,
    required: true
 },
 // password
 password: {
   type: String,
   trim: true,
   required: "Password is Required",
   validate: [({ length }) => length => 8, "Password shall be longer!"]
 },
 // email
 email: {
   type: String,
   unique: true,
   match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
 }
 
});

const savedAccount = mongoose.model("SavedAccount", savedAccountSchema);

module.exports = savedAccount; */