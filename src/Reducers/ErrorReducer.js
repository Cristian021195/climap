import { ErrorTypes } from "../Actions/ErrorTypes";
export const ErrorInitialState = {errores:null}
export function ErrorInit(initialState){
    return {
        errores:null
    }
}
export function ErrorReducer(state, action){
    switch (action.type) {
        case ErrorTypes.IS_ERROR:{
            return {errores: action.payload}
        }
        default:{
            return state
        }
    }
}