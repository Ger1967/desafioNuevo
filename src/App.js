import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import deportistas from "./components/Data";
import { useState, useEffect } from "react";
import { list } from "./api/Rule_deportistas";

function App() {
  // const [arrayDeportistas, setArrayDeportistas] = useState(deportistas);
  const [arrayDeportistas, setArrayDeportistas] = useState([]);

  const getDeportistas = async () => {
    await list().then((response) => {
      setArrayDeportistas(response);
    });
  };
  useEffect(() => {
    getDeportistas();
  }, []);

  const buscar = (nombre) => {
    if (nombre === "") {
      setArrayDeportistas(deportistas);
    } else {
      let deportista = deportistas.filter((deportista) => {
        return deportista.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setArrayDeportistas(deportista);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar buscar={buscar} />
      <Main
        arrayDeportistas={arrayDeportistas}
        // arrayEstadisticas={arrayEstadisticas}
      />
      <Footer />
    </div>
  );
}

export default App;
