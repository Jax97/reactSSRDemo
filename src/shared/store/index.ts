import { createStore } from 'redux'

export interface IState {
    data: string
}

interface IAction {
    type: string,
    payload: any
}

const initialState: IState = {
    data: ''
}

function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case 'CHANGE_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export function createClientStore() {
    return createStore(reducer, window.BACKEND_DATA);
}

export function createServerStore() {
    return createStore(reducer);
}
