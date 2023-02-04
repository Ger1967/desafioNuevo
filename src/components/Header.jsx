import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <button className="buttonHome">Home</button>
        <img src="./img/logoSenpai.png" alt="Logo Senpai" />
      </div>
      <div className="insertar">
        <Link to={"/form"}>
          <button className="buttonInsertar">Insertar Deportista</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
