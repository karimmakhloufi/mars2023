const Skill = require("../entity/Skill");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Skill)
      .save(req.body)
      .then(() => {
        res.send("Skill Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the Skill");
      });
  },
  read: async (req, res) => {
    try {
      const allSkills = await dataSource.getRepository(Skill).find();
      res.send(allSkills);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the skills");
    }
  },
  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Skill).delete(req.params.id);
      res.send("Skill deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the skill");
    }
  },
  update: async (req, res) => {
    try {
      const updateResult = await dataSource
        .getRepository(Skill)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
};
