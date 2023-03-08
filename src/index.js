const express = require("express");
const dataSource = require("./utils").dataSource;
const wildercontroller = require("./controller/WilderController");
const skillcontroller = require("./controller/SkillController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

// /api/wilder/addSkill

app.post("/api/wilder", wildercontroller.create);
app.get("/api/wilder", wildercontroller.read);
app.put("/api/wilder/:id", wildercontroller.update);
app.delete("/api/wilder/:id", wildercontroller.delete);

app.post("/api/skill", skillcontroller.create);
app.get("/api/skill", skillcontroller.read);
app.delete("/api/skill/:id", skillcontroller.delete);
app.put("/api/skill/:id", skillcontroller.update);

app.put("/api/addskill", wildercontroller.addSkill);

const start = async () => {
  await dataSource.initialize();

  app.listen(5000, () => {
    console.log("Server started");
  });
};

start();
