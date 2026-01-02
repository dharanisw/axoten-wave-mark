const express = require("express");
const cors = require("cors");

const teacherRoutes = require("./routes/teacherRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend running" });
});

app.use("/teacher", teacherRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});