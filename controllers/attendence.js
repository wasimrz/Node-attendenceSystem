const Student = require("../models/student");
const Attendence=require("../models/attendence")

exports.getStudent = (req, res, next) => {
  const classNumber=req.body.classNumber
Student.find({ stuClass:classNumber})
    .then((stuData) => {
      res.status(201).json({
        students: stuData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAttendence = (req, res, next) => {
  
  const attendenceArr = req.body.attendence;
  const dateToday = req.body.date;

  const selectedClass = req.body.selectClass;
  
        const reg = new Attendence({
          date: dateToday,
          studentsIsPresent: attendenceArr,
          std:selectedClass
        });

  reg.save().then((result) => {
    res.status(201).json({
      message: "Attendence succesfull",
    })
  }).catch((err) => {
      console.log(err);
    });
};

