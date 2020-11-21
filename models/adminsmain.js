const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminsmainSchema = new Schema({
  // // url string for thumbnail image
  // thumbnail: {
  //   type: String,
  //   default: ""
  // },
  // first name
  firstName: {
    type: String,
    required: true
  },
  // last name
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
  // email
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
   
});

const AdminMain = mongoose.model("AdminsMain", adminsmainSchema);

module.exports = AdminMain; 