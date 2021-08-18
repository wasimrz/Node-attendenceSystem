const mongoose = require("mongoose");

const { Schema } = mongoose;

const attendenceSchema = new Schema({
  date: {
    type: String,
    require: true,
  },

  studentsIsPresent: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  std: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Attendence", attendenceSchema);
