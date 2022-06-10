import map from '../Icons/map.svg';
import {MapView} from '../Components/MapView';
import { useContext } from 'react';
import { ErrorContext } from '../Contexts/ErrorContext';

export function Mapa({place, size = '6'}){
    let lugar = place ? place.place_name : '';
    let coords = place ? place.center : [-65.217590,-26.808285];
    const [errores, setErrores] = useContext(ErrorContext);
    return (
        <>
            <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                <h2>Seccion mapa</h2>
                <img src={map} alt="Seccion Mapa"/>
                <h3>{lugar}</h3>
                <MapView coords={coords}/>
            </article>
        </>
    )
}