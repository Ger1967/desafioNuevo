import React, { useState } from "react";
import "./style.css";
import Modal from "./Modal";

function Main(props) {
  const [openModal, setOpenModal] = useState(false);
  const [deportistaSeleccionado, setDeportistaSeleccionado] = useState({});

  const toggleModal = (deportista) => {
    setDeportistaSeleccionado(deportista);
    setOpenModal(!openModal);
  };

  return (
    <div className="main">
      {openModal && (
        <Modal
          deportista={deportistaSeleccionado}
          cerrarModal={toggleModal}
          className="componenteModal"
        />
      )}
      {props.arrayDeportistas.map((deportista) => {
        return (
          <>
            <div className="card">
              <h3>{deportista.nombre}</h3>
              <img className="fotos" src={deportista.foto} />
              <h4 className="especialidad">{deportista.especialidad} </h4>
              <div className="bt-ver-mas">
                <button onClick={() => toggleModal(deportista)}>Ver Mas</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Main;
