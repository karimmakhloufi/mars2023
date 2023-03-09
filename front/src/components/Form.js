import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [wilderName, setName] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/wilder", {
          name: wilderName,
          city: city,
        });
      }}
    >
      <input
        value={wilderName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
