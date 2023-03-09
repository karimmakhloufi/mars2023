import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Wilder from "./components/Wilder";
import AddWilderForm from "./components/AddWilderForm";
import AddSkillToWilderForm from "./components/AddSkillToWilderForm";

const App = () => {
  const [wilders, setWilders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/wilder");
      console.log(result);
      setWilders(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddWilderForm />
        <AddSkillToWilderForm />
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                skills={wilder.skills}
                id={wilder.id}
                city={wilder.city}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
