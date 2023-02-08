import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

function SearchBar(props) {
  const [nombreDeportista, setNombreDeportista] = useState("");

  function getDeportista() {
    props.buscar(nombreDeportista);
  }

  const nombreIngresado = (e) => {
    setNombreDeportista(e.target.value);
  };

  return (
    <div className="searchBar">
      <input type="text" onChange={nombreIngresado} />
      <button onClick={getDeportista}>Buscar</button>
    </div>
  );
}

export default SearchBar;
