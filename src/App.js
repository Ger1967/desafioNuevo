import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import deportistas from "./components/Data";
import { useState } from "react";

function App() {
  const [arrayDeportistas, setArrayDeportistas] = useState(deportistas);

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
      <Main arrayDeportistas={arrayDeportistas} />
      <Footer />
    </div>
  );
}

export default App;
