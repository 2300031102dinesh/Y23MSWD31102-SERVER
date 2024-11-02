// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const auth = require("../middleware/auth");

router.get("/", auth, courseController.getAllCourses);
router.get("/:id", auth, courseController.getCourseById);
router.post("/", auth, courseController.createCourse);
router.put("/:id", auth, courseController.updateCourse);
router.delete("/:id", auth, courseController.deleteCourse);

module.exports = router;
