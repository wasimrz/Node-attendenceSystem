const Student = require("../models/student");
const Teacher = require("../models/teacher");
const { validationResult } = require("express-validator");

exports.postStudent = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return;
  }

  const firstName = req.body.studentData.firstName;

  const lastName = req.body.studentData.lastName;
  const email = req.body.studentData.email;

  const stuPhone = req.body.studentData.phone;

  const assignClass = req.body.studentData.class;
  Student.findOne({ phone: stuPhone })
    .then((phoneNumber) => {
      console.log(phoneNumber);
      if (!phoneNumber) {
        const reg = new Student({
          firstName: firstName,
          lastName: lastName,
          phone: stuPhone,
          stuClass: assignClass,
          email: email,
        });

        reg.save().then((result) => {
          res.status(201).json({
            message: "strudent registration succesfull",
          });
        });
      } else {
        res.status(409).json({
          message: "student already enrolled",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postTeacher = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return;
  }

  const firstName = req.body.teacherData.firstName;

  const lastName = req.body.teacherData.lastName;
  console.log(lastName);
  const teachPhone = req.body.teacherData.phone;

  const teachClassValue = req.body.teacherData.classValue;
  Teacher.findOne({ phone: teachPhone })
    .then((teachPhonenumber) => {
      if (!teachPhonenumber) {
        const reg = new Teacher({
          firstName: firstName,
          lastName: lastName,
          phone: teachPhone,
          teachClass: teachClassValue,
        });

        reg.save().then((result) => {
          res.status(201).json({
            message: "teacher registration succesfull",
          });
        });
      } else {
        res.status(409).json({
          message: "teacher already enrolled",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
