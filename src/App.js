import axios from "axios";
import { useEffect, useReducer, useState, useMemo } from "react";
import { Header } from "./Components/Header";
import { Clima } from "./Pages/Clima";
import { Conctacto } from "./Pages/Contacto";
import { Mapa } from "./Pages/Mapa";
import { Recursos } from "./Pages/Recursos";
import { PUBLIC_TOKENS } from "./Helpers/publicTokens";
import { ErrorInitialState, ErrorReducer } from "./Reducers/ErrorReducer";
import { Alert } from "./Components/Alert";
import { ErrorProvider } from "./Contexts/ErrorContext";
import {BrowserRouter as Router, Route, Routes, Red, Navigate } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { debounce } from "./Helpers/debounce";

function App() {
  const [lugar, setLugar] = useState('');
  const [result, setResult] = useState([])
  const [selected, setSelected] = useState(null)
  const [state, dispatch] = useReducer(ErrorReducer, ErrorInitialState)
  const [error, setError] = useState(false);

  const deboucedFetchData = useMemo(()=>{//memorizamos esta funcion que contiene la asincrona que a su vez es ejecutada de manera debounceada

    async function datosClimap(lugar){
      try {
        const resp = await fetch(`
          https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(lugar)}.json?types=country,locality,place&language=es&access_token=${PUBLIC_TOKENS.mapbox}
        `)
        const data = await resp.json();
        setResult(data.features || [])
        setError(false)
  
      } catch (error) {
          setError(error.message)
          setResult([])
      }
    }
    return debounce(datosClimap, 600)//retorna la funcion debounceada
  },[])//solo volvera a calcular el valor memorizado si cambia la dependencia (como no hay dependencia siempre estará memorizada)

  useEffect(()=>{
    if(lugar.length > 3){
      deboucedFetchData(lugar) //ejecuta la funcion que al final ejecuta la ultima debounceada con el delay
    }
  },[lugar, deboucedFetchData])

  return (
    <>
    <ErrorProvider>
      <Router>
      <Header/>
        {/*console.log(state.errores)*/}
        <article style={{}}>
          <input type="text" placeholder="Inserte lugar" className="b-shadow mb-4 mr-4" maxLength={12} onChange={(e)=>{setLugar(e.target.value); setSelected(null)}}/>
          <select className="b-shadow mb-4" style={{maxWidth:'80vw'}} onChange={(el)=>{setSelected(result.find((e)=>e.place_name === el.target.value))}}>
            {result.map((res, res_i)=>{
              return <option key={res.id} id={res.id}>{res.place_name}</option>
            })}
          </select>
          {error ? <span className="error ml-4">{error}</span> :<></>}
        </article>
        <section className="container mx-auto row">
          {error && <Alert/>}
          <Routes>
            <Route path="*" element={<NotFound size="12" />}/>
            <Route exact path="/" element={
              <>
                <Clima place={selected || result[0]}/>
                <Mapa place={selected || result[0]}/>
                <Recursos/>
                <Conctacto/>
              </>
            }/>
            <Route exact path="clima" element={<Clima size="12" place={selected || result[0]}/>}/>
            <Route exact path="mapa" element={<Mapa size="12" place={selected || result[0]}/>}/>
            <Route exact path="recursos" element={<Recursos size="12"/>}/>
            <Route exact path="contacto" element={<Conctacto size="12"/>}/>
            <Route exact path="inicio" element={<Navigate to="/" />}>
            </Route>
          </Routes>
        </section>
      </Router>
      </ErrorProvider>
    </>
  );
}
export default App;
