import './Clients.css'
import { Context } from "../../context/context";
import { useContext } from "react";

const Clients = () => {

const { state, dispatch } = useContext(Context);

function openModalEdit() {
    dispatch({
      type: "OPEN_EDITAR",
      payload: {
        modalEdit: true,
      },
    });
  }

function excluirUsuario(item: any) {
    dispatch({
      type: 'DEL',
      payload: {
        name: item
      }
    })
  }

function editarUsuario(name: any, email: any) {
    dispatch({
      type: 'EDIT',
      payload: {
        name: name,
        email: email
      }
    })

    openModalEdit()
  }
  
  return (
    <div className="containerGeral">
        {state.cadastro.map((item, index) => (
        <div className="containerItem">
            <div className="containerData">
            <p>{item.name}</p>
            <p>{item.email}</p>
            </div>
            <div className="containerButtons">
            <button onClick={() => editarUsuario(item.name, item.email)}>Editar</button>
            <button onClick={() => excluirUsuario(item.name)}>Excluir</button>
            </div>
        </div>
        ))}
    </div> 
  )
}

export default Clients

