import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import deportistas from "./components/Data";
import { useState, useEffect } from "react";
import { list } from "./api/Rule_deportistas";

function App() {
  const [arrayDeportistas, setArrayDeportistas] = useState([]);
  const [flag, setFlag] = useState(false);

  const getDeportistas = async () => {
    await list().then((response) => {
      setArrayDeportistas(response);
    });
  };
  useEffect(() => {
    getDeportistas();
  }, [flag]);

  const buscar = (nombre) => {
    if (nombre === "") {
      setFlag(!flag);
      setArrayDeportistas(arrayDeportistas);
    } else {
      let deportista = arrayDeportistas.filter((deportista) => {
        return deportista.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setArrayDeportistas(deportista);
    }
  };
  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar buscar={buscar} />
      <Main arrayDeportistas={arrayDeportistas} />
      <Footer />
    </div>
  );
}

export default App;
