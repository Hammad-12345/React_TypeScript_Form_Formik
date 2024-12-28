const mongoose = require("mongoose");

const profileschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  cnicno: {
    type: String,
    required: true,
    unique:true
  },
  mobileno: {
    type: String,
    required: true,
    unique:true
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  gender: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);
module.exports = mongoose.model("Profile", profileschema);