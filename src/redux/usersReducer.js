import {types} from "./types";

const initialState = {
    inputValue: '',
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case types.INPUT_VALUE:
            return {...state, inputValue: action.payload}
        case types.ADD_USERS:
            return {users: [...state.users, action.payload]}
        case types.DELETE_ALL:
            return {...state, users: []}
        case types.CLEAR_INPUT:
            return {...state, inputValue: ''}
        default: return state
    }
}

export const addReducerAction = (name) => {
    return {
        type: types.ADD_USERS,
        payload: name
    }
}
