import { useEffect, useState } from "react";
import axios from "axios";

const AddSkillToWilderForm = () => {
  const [skills, setSkills] = useState([]);
  const [wilders, setWilders] = useState([]);
  const [selectedWilder, setSelectedWilder] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  useEffect(() => {
    const fetchWilders = async () => {
      const result = await axios.get("http://localhost:5000/api/wilder");
      setWilders(result.data);
    };
    fetchWilders();
    const fetchSkills = async () => {
      const result = await axios.get("http://localhost:5000/api/skill");
      console.log(result.data);
      setSkills(result.data);
    };
    fetchSkills();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("selectedWilder", selectedWilder);
        console.log("selected skill", selectedSkill);
        axios.put("http://localhost:5000/api/addskill", {
          wildername: selectedWilder,
          skillname: selectedSkill,
        });
      }}
    >
      <h3>Add Skill To Wilder</h3>
      <select
        onChange={(e) => {
          setSelectedWilder(e.target.value);
        }}
        defaultValue={"disabled"}
      >
        <option value="disabled" disabled>
          Select a wilder
        </option>
        {wilders.map((wilder) => (
          <option key={wilder.id} value={wilder.name}>
            {wilder.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedSkill(e.target.value);
        }}
        defaultValue={"disabled"}
      >
        <option value="disabled" disabled>
          Select a skill
        </option>
        {skills.map((skill) => (
          <option key={skill.id} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default AddSkillToWilderForm;
