const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Wilder Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the Wilder");
      });
  },
  read: async (req, res) => {
    try {
      const allWilders = await dataSource.getRepository(Wilder).find();
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },
  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("Wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the wilder");
    }
  },
  update: async (req, res) => {
    try {
      const updateResult = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
  addSkill: async (req, res) => {
    console.log("addskill controller");
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wildername });
      console.log("wilder", wilderToUpdate);
      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneByOrFail({ name: req.body.skillname });
      console.log("Skill", skillToAdd);
      wilderToUpdate.skills.push(skillToAdd);
      console.log("updated wilder", wilderToUpdate);
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Wilder updated");
    } catch (err) {
      console.log("error", err);
      res.send("Error while adding skill");
    }
  },
};
