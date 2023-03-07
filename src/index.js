const express = require("express");
const dataSource = require("./utils").dataSource;
const wildercontroller = require("./controller/WilderController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.post("/api/wilder", wildercontroller.create);
app.get("/api/wilder", wildercontroller.read);

const start = async () => {
  await dataSource.initialize();

  app.listen(5000, () => {
    console.log("Server started");
  });
};

start();
