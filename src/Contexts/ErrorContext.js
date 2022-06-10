import { createContext, useReducer, useState } from "react";
import { ErrorInitialState, ErrorReducer } from "../Reducers/ErrorReducer";

export const ErrorContext = createContext(); //sirve para intermediario, para que los demas componentes puedan encontrarlo.

export function ErrorProvider({children}){
    const [errores, setErrores] = useState([])
    return (
        <ErrorContext.Provider value={[errores, setErrores]}>
            {children}
        </ErrorContext.Provider>
    )
}