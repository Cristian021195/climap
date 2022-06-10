import { useContext, useState } from "react";
import { ErrorContext } from "../Contexts/ErrorContext";

export function Alert(){
    const [errores, setErrores] = useContext(ErrorContext);

    if(errores.length > 0){
        return (
            <span className="error">
                <div>
                    <ul>
                        {errores.map((err, err_i)=><li key={err_i}>{err}</li>)}
                    </ul>
                </div>                
            </span>
        )
    }
    return <></>
}//<button>&nbsp;X&nbsp;</button>