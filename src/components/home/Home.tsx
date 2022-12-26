import React, { useState } from "react";
import "./Home.css";
import { ModalCadastro } from "../modal/modalCadastro";
import { Context } from "../../context/context";
import { useContext } from "react";
import Clients from "../clients/Clients";
import { ModalEditar } from "../modaleditar/modalEditar";
import ReactSwitch from "react-switch";

const Home = () => {
  
  const { state, dispatch } = useContext(Context);
  const [theme, setTheme] = useState(state.modal.theme)

  function openModal() {
    dispatch({
      type: "OPEN_CADASTRO",
      payload: {
        modalCadastro: true,
      },
    });
  }

  function trocarTema() {

    let resultado = false

    if (state.modal.theme == false) {
      resultado = true
    } else {
      resultado = false
    }
    
    dispatch({
      type: 'SWITCH_THEME',
      payload: {
        theme: resultado
      }
    })

  }

  return (
    <div className={state.modal.theme ? 'fatherContainerDark': 'fatherContainerLight'}>

      <div className="mainContainer">

        <div className="containerButtonCadastrar">
          <button onClick={openModal}>Cadastrar novo cliente</button>
          <ReactSwitch onChange={trocarTema} checked={state.modal.theme}/>
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
