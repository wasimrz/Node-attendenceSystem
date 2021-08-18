const express = require("express");
const { body } = require("express-validator");

const schoolController = require("../controllers/school");
const attendenceController = require("../controllers/attendence");

const router = express.Router();

router.post(
  "/student",
  [
    body("studentData.firstName").trim().isLength({ min: 1 }),
    body("studentData.lastName").trim().isLength({ min: 2 }),
    body("studentData.phone").trim().isMobilePhone(),
    body("studentData.email").trim().isEmail(),
  ],
  schoolController.postStudent
);

// /admin/products => GET
router.post(
  "/teacher",
  [
    body("teacherData.firstName").trim().isLength({ min: 1 }),
    body("teacherData.lastName").trim().isLength({ min: 2 }),
    body("teacherData.phone").trim().isMobilePhone(),
  ],
  schoolController.postTeacher
);

router.post("/attendence", attendenceController.getStudent);
router.post("/submit", attendenceController.postAttendence);


module.exports = router;
