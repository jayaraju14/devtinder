const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: [true, "email required"],
    unique: [true, "Email id already exist"],
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: [18, "minmum age is 18"],
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
