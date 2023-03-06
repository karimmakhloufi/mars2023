const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");

const app = express();

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder],
});

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({ name: "New Wilder" });
  app.listen(5000, () => {
    console.log("Server started");
  });
};

start();
