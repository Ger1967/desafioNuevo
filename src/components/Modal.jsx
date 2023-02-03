import React from "react";
import { useEffect, useState } from "react";
import { getEstadisticasById } from "../api/Rule_deportistas";
import "./style.css";

function Modal(props) {
  const [arrayEstadisticas, setArrayEstadisticas] = useState([]);
  const id = props.deportista.id;
  console.log(id);

  const getEstadisticas = async () => {
    await getEstadisticasById(id).then((response) => {
      setArrayEstadisticas(response);
    });
  };
  useEffect(() => {
    getEstadisticas();
  }, []);
  {
    console.log(arrayEstadisticas);
  }
  return (
    <section className="modal">
      <div className="imagen-exit">
        <img
          src="./img/exit-modal.png"
          alt="exit"
          width="80px"
          className="exit"
          onClick={props.cerrarModal}
        />
      </div>
      <section className="info">
        <div className="combo">
          <div className="detalles">
            <img src={props.deportista.foto} alt="foto" />
            <div>
              <h3>{props.deportista.nombre}</h3>
              <p>{props.deportista.especialidad}</p>
              <ul>
                <li>Edad: {props.deportista.edad}</li>
                <li>Altura: {props.deportista.altura}</li>
                <li>Peso: {props.deportista.peso}</li>
                <li>Nacionalidad: {props.deportista.nacionalidad}</li>
                <li>Record Personal: {props.deportista.record}</li>
              </ul>
            </div>
          </div>

          <div className="descripcion">
            <p>{props.deportista.descripcion}</p>
          </div>
          <button className="boton-modal">ENTRENAR</button>
        </div>
        <div className="estats">
          <h3>Estadisticas</h3>
          <p>Energia: {arrayEstadisticas[0].energia}</p>
          <p>Fuerza: {arrayEstadisticas[0].fuerza}</p>
          <p>Resistencia: {arrayEstadisticas[0].resistencia}</p>
          <p>Agilidad: {arrayEstadisticas[0].agilidad}</p>
          <p>Aguante: {arrayEstadisticas[0].aguante}</p>
          <p>Dedicacion: {arrayEstadisticas[0].dedicacion}</p>
          <p>Profesionalismo: {arrayEstadisticas[0].profesionalismo}</p>
        </div>
      </section>
    </section>
  );
}

export default Modal;
