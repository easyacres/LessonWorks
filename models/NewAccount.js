/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let newAccountSchema = new Schema({
  url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // teacher first name
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  // username
  username: {
    type: String,
    required: true
  },
  // Password
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length => 8, "Password shall be longer!"]
  },
  // course taught
  course: {
    type: String,
    required: true
  },
  // email
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  
 
});

const newAccount = mongoose.model("newAccount", newAccountSchema);

module.exports = newAccount; 
*/