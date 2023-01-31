import React from "react";
import "./style.css";

function Modal(props) {
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
            <img src={props.deportista.imagen} alt="foto" />
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
          <p>Energia: {props.deportista.estadisticas.energia}</p>
          <p>Fuerza: {props.deportista.estadisticas.fuerza}</p>
          <p>Resistencia: {props.deportista.estadisticas.resistencia}</p>
          <p>Agilidad: {props.deportista.estadisticas.agilidad}</p>
          <p>Aguante: {props.deportista.estadisticas.aguante}</p>
          <p>Dedicacion: {props.deportista.estadisticas.dedicacion}</p>
          <p>
            Profesionalismo: {props.deportista.estadisticas.profesionalismo}
          </p>
        </div>
      </section>
    </section>
  );
}

export default Modal;
