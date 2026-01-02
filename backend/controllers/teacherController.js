exports.uploadMarkingScheme = (req, res) => {
  console.log("Teacher uploaded:", req.file);

  res.json({
    message: "Marking scheme uploaded",
    file: req.file
  });
};
