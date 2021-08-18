const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  teachClass: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
