import React from "react";
import imgClose from "../../img/close.png";
import "./modal.css";
import { Context } from "../../context/context";
import { useContext } from "react";

export const Modal = () => {
  const { state, dispatch } = useContext(Context);

  function fechaModal() {
    dispatch({
      type: "CLOSE",
      payload: {
        modal: false,
      },
    });
  }

  function cadastraPessoa() {
    dispatch({
      type: "CADASTRAR",
      payload: {
        name: "fulano da silva",
        email: "seila@gmail.com",
      },
    });
  }

  function teste() {
    console.log(state.cadastro);
  }

  return (
    <div className="containerModalCadastro">

      <div className="modalCadastro">

        <img src={imgClose} onClick={fechaModal} />
    
        <h3>Cadastro de clientes</h3>

        <div className="containerInformation">
          <label htmlFor="">Nome</label>
          <input type="text" />
        </div>

        <div className="containerInformation">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div className="containerButtons">
          <button onClick={cadastraPessoa}>Salvar</button>
          <button>Cancelar</button>
          <button onClick={teste}>teste</button>
        </div>

      </div>

    </div>
  );
};
