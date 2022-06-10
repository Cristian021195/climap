import tools from '../Icons/tools.svg';
export function Recursos({size = '6'}){
    return (
        <>
            <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                    <h2>Seccion recursos</h2>
                    <img src={tools} alt="Seccion recursos"/>
                    <br/>
                    <i>Las tecnologias y servicios que usé para esta app son: </i>
                    <ul>
                        <li><a alt="Pagina oficial react jota ese" href="https://es.reactjs.org/">React JS</a></li>
                        <li><a alt="Pagina oficial openwheater map" href="https://openweathermap.org/">OpenweatherMap</a></li>
                        <li><a alt="Pagina oficial Mapbox" href="https://www.mapbox.com/">Mapa y Ubicacion</a></li>
                        <li><a alt="Pagina oficial Bootstrap version 5" href="https://getbootstrap.com/docs/5.0/layout/grid/">Bootstrap grid system</a></li>
                    </ul>                    
            </article>
        </>
    )
}