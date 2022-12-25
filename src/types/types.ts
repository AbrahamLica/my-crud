export type modalReducerInitialStateType = {
    isOpenModalCadastro: boolean
    isOpenModalEdit: boolean
    pos: number
}

export type ActionType = {
    type: string
    payload: {
        [key: string]: any;
    }
}

export type ChildrenType = {
    children: React.ReactNode
}

export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    modal: modalReducerInitialStateType
    cadastro: cadastroReducerInitialStateType[]
}

///////////////////////////////////////////////


export type cadastroReducerInitialStateType = {
    name?: string
    email?: string
    nameEdit?: string
    emailEdit?: string
}



