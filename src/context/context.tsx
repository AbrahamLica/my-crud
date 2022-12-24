import { createContext, useReducer } from "react";
import { ActionType, ChildrenType, InitialStateContextType, modalReducerInitialStateType, ContextType, cadastroReducerInitialStateType } from "../types/types";

//////////////////////// REDUCER MODAL /////////////////////////

export const modalReducerInitialState: modalReducerInitialStateType = {
    isOpenModal: false
}

export function reducerModal(state: modalReducerInitialStateType, action: ActionType) {
    switch (action.type) {
        case 'OPEN':
            return {...state, isOpenModal: action.payload.modal}
            break;

        case 'CLOSE':
            return {...state, isOpenModal: action.payload.modal}
            break;
    }
    return state
}

////////////////////// REDUCER CADASTRO DE PESSOAS /////////////////////////

export const cadastroReducerInitialState: cadastroReducerInitialStateType[] = [
    {name: 'abraham', email: 'abrahamlica451@gmail.com'}
]   

export function reducerCadastro(state: cadastroReducerInitialStateType[], action: ActionType) {
    switch (action.type) {
        case 'CADASTRAR':
            let newState = [...state]
            newState.push({
                name: action.payload.name,
                email: action.payload.email
            })
            return newState
            
    }
    return state
}

////////////////////// CONTEXT //////////////////////////////

const ContextInitialState = {
    modal: modalReducerInitialState,
    cadastro: cadastroReducerInitialState
}

export const Context = createContext<ContextType>({
    state: ContextInitialState,
    dispatch: () => null
})  

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
    modal: reducerModal(state.modal, action),
    cadastro: reducerCadastro(state.cadastro, action)
})

export function ContextProvider({children}: ChildrenType) {

    const [state, dispatch] = useReducer(mainReducer, ContextInitialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}