import {types} from "./types";

export const changeTitleAction = () => {
    return{
        type: types.MAIN_TITLE
    }
}

export const withParamsAction = (title) => {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export const changeInputAction = (name) => {
    return {
        type: types.INPUT_VALUE,
        payload: name
    }
}

export const addUserAction = (name) => {
    return {
        type: types.ADD_USERS,
        payload: name
    }
}

export const deleteAllAction = () => {
    return {
        type: types.DELETE_ALL
    }
}

export const clearInputAction = () => {
    return {
        type: types.CLEAR_INPUT
    }
}