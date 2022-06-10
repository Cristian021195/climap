import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Footer } from "./Components/Footer";
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

function App() {
  const [lugar, setLugar] = useState('');
  const [result, setResult] = useState([])
  const [selected, setSelected] = useState(null)
  const [state, dispatch] = useReducer(ErrorReducer, ErrorInitialState)
  const [error, setError] = useState(false);

  useEffect(()=>{
    if(lugar.length > 3){
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(lugar)}.json`, { params: { types: 'country,locality,place', language: 'es', access_token:  PUBLIC_TOKENS.mapbox} })
      .then(res=>{
        setResult(res.data.features)
        setError(false)
      }).catch(err=>{
        setError(err.message)
        setResult([])
      })
    }
  },[lugar])

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
/*

*/

//console.log(result.map(res=>res.place_name))
export default App;
