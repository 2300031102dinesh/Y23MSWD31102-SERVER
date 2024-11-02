// routes/facultyRoutes.js
const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/facultyController");
const auth = require("../middleware/auth");

router.get("/", auth, facultyController.getAllFaculty);
router.get("/:id", auth, facultyController.getFacultyById);
router.post("/", auth, facultyController.createFaculty);
router.put("/:id", auth, facultyController.updateFaculty);
router.delete("/:id", auth, facultyController.deleteFaculty);

module.exports = router;
