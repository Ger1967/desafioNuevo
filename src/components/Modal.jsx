import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEstadisticasById } from "../api/Rule_deportistas";
import "./style.css";
import FormEstadisticas from "./FormEstadisticas";
import axios from "axios";
import { addFoto } from "../api/Rule_deportistas";

function Modal(props) {
  const [arrayEstadisticas, setArrayEstadisticas] = useState([]);
  const id = props.deportista.id;
  console.log(props);
  const { idDeportista } = useParams;
  const [image, setImage] = useState("");

  const getEstadisticas = async () => {
    await getEstadisticasById(id).then((response) => {
      setArrayEstadisticas(response);
    });
  };
  useEffect(() => {
    getEstadisticas();
  }, []);

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  function handleApi() {
    const formData = new FormData();
    formData.append("img", image);
    // axios.post("url", formData).then((res) => {
    //   console.log(res);
  }

  console.log(arrayEstadisticas);
  <FormEstadisticas idDeportista={id} />;
  return (
    <div className="fondoModal">
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
              <form className="insertarFoto" action="/api/deportistas/add/foto">
                <input type="file" name="file" onChange={handleImage} />
                <button onClick={handleApi}>Agregar foto</button>
              </form>
              <div className="infoDeportistaModal">
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
            <p>Energia: {arrayEstadisticas[0]?.energia}</p>
            <p>Fuerza: {arrayEstadisticas[0]?.fuerza}</p>
            <p>Resistencia: {arrayEstadisticas[0]?.resistencia}</p>
            <p>Agilidad: {arrayEstadisticas[0]?.agilidad}</p>
            <p>Aguante: {arrayEstadisticas[0]?.aguante}</p>
            <p>Dedicacion: {arrayEstadisticas[0]?.dedicacion}</p>
            <p>Profesionalismo: {arrayEstadisticas[0]?.profecionalismo}</p>
            <br />
            <br />
            <Link to="/estadisticas" state={{ idDeportista: id }}>
              <button>Agregar estadisticas</button>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Modal;
