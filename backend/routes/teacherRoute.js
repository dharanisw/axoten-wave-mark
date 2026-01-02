const express = require("express");
const multer = require("multer");
const { uploadMarkingScheme } = require("../controllers/teacherController");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload-marking-scheme", upload.single("file"), uploadMarkingScheme);

module.exports = router;
