import React, { useState } from "react";
import "./Home.css";
import { Modal } from "../modal/modal";
import { Context } from "../../context/context";
import { useContext } from "react";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  function openModal() {
    dispatch({
      type: "OPEN",
      payload: {
        modal: true,
      },
    });
  }

  return (
    <div className="fatherContainer">
      <div className="mainContainer">
        <button onClick={openModal}>Cadastrar novo cliente</button>
        <div className="containerClients">
          {state.modal.isOpenModal == true && <Modal></Modal>}
          {state.cadastro.map((item, index) => (
            <div className="containerGeral">
              <div className="containerTitles">
                <h3>Nome</h3>
                <h3>Email</h3>
              </div>
              <div className="containerItem">
                <div className="containerData">
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
                <div className="containerButtons">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
