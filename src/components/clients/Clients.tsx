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

function editarUsuario(index:any) {
    dispatch({
      type: 'SET_POS',
      payload: {  
        pos: index
      }
    })

    openModalEdit()
  }
  
  return (
    <div className="containerGeral">
      
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
        {state.cadastro.map((item, index) => (
        <div className="containerItem">

          <table>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          </table>

          <div className="containerButtons">
            <button onClick={() => editarUsuario(index)}>Editar</button>
            <button onClick={() => excluirUsuario(item.name)}>Excluir</button>
          </div>
        </div>
        ))}
    </div> 
  )
}

export default Clients

