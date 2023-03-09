import axios from "axios";
import blank_profile from "../assets/profile.png";
import Skill from "./Skill";

const handleDelete = (id) => {
  axios.delete("http://localhost:5000/api/wilder/" + id);
};
const Wilder = ({ name, skills, id, city }) => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      {city ? <h4>{city}</h4> : null}
      <button onClick={() => handleDelete(id)}>Delete</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill name={skill.name} votes={skill.votes} key={skill.id} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
