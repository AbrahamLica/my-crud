import React, { useState } from "react";
import imgClose from "../../img/close.png";
import "./modal.css";
import { Context } from "../../context/context";
import { useContext } from "react";

export const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

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

  function inputSetName() {

  }

  function inputSetEmail() {
    
  }

  return (
    <div className="containerModalCadastro">

      <div className="modalCadastro">

        <img src={imgClose} onClick={fechaModal} alt='nada'/>
    
        <p>Cadastrar novo usuário</p>

        <div className="containerInformation">
          <label htmlFor="">Nome</label>
          <input type="text" value={name} onChange={inputSetName}/>
        </div>

        <div className="containerInformation">
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={inputSetEmail} />
        </div>

        <div className="containerButtons">
          <button onClick={cadastraPessoa}>Salvar</button>
          <button onClick={fechaModal}>Cancelar</button>
        </div>

      </div>

    </div>
  );
};
