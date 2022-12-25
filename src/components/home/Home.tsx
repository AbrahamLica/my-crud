import React, { useState } from "react";
import "./Home.css";
import { ModalCadastro } from "../modal/modalCadastro";
import { Context } from "../../context/context";
import { useContext } from "react";
import Clients from "../clients/Clients";
import { ModalEditar } from "../modaleditar/modalEditar";

const Home = () => {
  
  const { state, dispatch } = useContext(Context);

  function openModal() {
    dispatch({
      type: "OPEN_CADASTRO",
      payload: {
        modalCadastro: true,
      },
    });
  }

  return (
    <div className="fatherContainer">

      <div className="mainContainer">

        <div className="containerButtonCadastrar">
          <button onClick={openModal}>Cadastrar novo cliente</button>
        </div>

        <div className="containerTitles">
          {state.modal.isOpenModalCadastro === true && <ModalCadastro></ModalCadastro>}
          {state.modal.isOpenModalEdit === true && <ModalEditar></ModalEditar>}
        </div>

        <div className="containerClients">
          {state.cadastro.length ? (<Clients></Clients>) : null}
        </div>
 
      </div>

    </div>
  );
};

export default Home;
