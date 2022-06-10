import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from 'react';
import weather from '../Icons/weather.svg';
import { PUBLIC_TOKENS } from '../Helpers/publicTokens';
import {ErrorInitialState, ErrorReducer } from '../Reducers/ErrorReducer';
import { ErrorTypes } from '../Actions/ErrorTypes';
import { ErrorContext } from '../Contexts/ErrorContext';
import { Loader } from '../Components/Loader';
export function Clima({place,size = '6'}){
    let lugar = place ? place.place_name : '';
    let coords = place ? place.center : ['',''];
    const [clima, setClima] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    /*const [state, dispatch] = useReducer(ErrorReducer, ErrorInitialState) // dispatch({type: ErrorTypes.IS_ERROR, payload: [err.toSring()]})*/

    const [errores, setErrores] = useContext(ErrorContext);

    useEffect(()=>{
        if(lugar !== ''){
            setIsLoading(true);
            axios.get('https://api.openweathermap.org/data/2.5/weather', {params:{lat: coords[1], lon:coords[0], appid: PUBLIC_TOKENS.openweather, units:'metric'}})
            .then(res=>{
                setClima(res.data);
                setIsLoading(false);
            })
            .catch(err=>{
                console.log(err.message); setErrores([err.message]); setIsLoading(false);
            })
        }
    },[coords])

    if(isLoading){
        return (
            <>
                <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                    <h2>Clima</h2>
                    <img src={weather} alt="weater icon"/>
                    <Loader/>
                </article>
            </>
        )
    }else{
        return (
            <>
                <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                    <h2>Clima</h2>
                    <img src={weather} alt="weater icon"/>                
                    <h3>{lugar}</h3>
                    {clima ? <ul>
                        <li>longitud: {coords[0]}, latitud: {coords[1]}</li>
                        <li>Velocidad del viento: {clima && clima.wind.speed} m/s</li>
                        <li>Temperatura: {clima && clima.main.temp}°C, Máxima: {clima && clima.main.temp_max}°C, Minima: {clima && clima.main.temp_min}°C</li>
                        <li>Nubosidad: {clima && clima.clouds.all}%</li>
                    </ul> : <i>¡Sin datos!</i>}
                </article>
            </>
        )
    }
}

/**
 * 
 * 
 * 
 */

