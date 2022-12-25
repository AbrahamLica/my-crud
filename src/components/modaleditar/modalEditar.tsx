import React, { ChangeEvent, useState } from "react";
import imgClose from "../../img/close.png";
import "./modalEditar.css";
import { Context } from "../../context/context";
import { useContext } from "react";

export const ModalEditar = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.cadastro[state.modal.pos].nameEdit)
  const [email, setEmail] = useState(state.cadastro[state.modal.pos].emailEdit)

  function fechaModal() {
    dispatch({
      type: "CLOSE_EDITAR",
      payload: {
        modalEdit: false,
      },
    });
  }

  function atualizarCadastro() {
    dispatch({
      type: 'EDIT',
      payload: {
        name: name,
        email: email,
        pos: state.modal.pos
      }
    })

    fechaModal()
  }


  function inputSetName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function inputSetEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function teste() {
    console.log(state.cadastro[0])
  }

  return (
    <div className="containerModalCadastro">

      <div className="modalCadastro">

        <img src={imgClose} onClick={fechaModal} alt='nada'/>
    
        <p>Editar usuário</p>

        <div className="containerInformation">
          <label htmlFor="">Nome</label>
          <input type="text" value={name} onChange={inputSetName}/>
        </div>

        <div className="containerInformation">
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={inputSetEmail} />
        </div>

        <div className="containerButtons">
          <button onClick={atualizarCadastro}>Atualizar</button>
          <button onClick={fechaModal}>Cancelar</button>
          <button onClick={teste}>teste</button>
        </div>

      </div>

    </div>
  );
};
