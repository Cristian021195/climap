import { useEffect, useLayoutEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { PUBLIC_TOKENS } from '../Helpers/publicTokens';
mapboxgl.accessToken = PUBLIC_TOKENS.mapbox;
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


export function MapView({coords}){
    const mapDiv = useRef(null);
    useEffect(() => {
        if (mapDiv.current) {
            const map = new mapboxgl.Map({
              container: mapDiv.current,
              style: "mapbox://styles/mapbox/streets-v11",
              center: coords,
              zoom: 10
            });
        }
    },[coords])
    /*const [map, setMap] = useState(null);
    useEffect(() => {
        if (mapDiv.current && !map) {
          const map = new mapboxgl.Map({
            container: mapDiv.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: coords,
            zoom: 14
          });
          setMap(map);
        }
    }, [mapDiv, map, coords]);*/

    return (
        <div ref={mapDiv} className='-mapa'>
        </div>
    )
}