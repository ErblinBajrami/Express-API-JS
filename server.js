const express = require("express");
const futbollistatRouter = require("./routes/futbollistat.router")
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/futbollistat", futbollistatRouter);  

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
