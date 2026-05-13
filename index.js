const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Azure MERN API Running 🚀");
});




const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});