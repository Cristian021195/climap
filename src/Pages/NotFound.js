import notfound from '../Icons/not-found.svg';
export function NotFound({size='6'}){
    return (
        <>
            <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                <h2>404, Ups pagina no encontrada</h2>
                <br/>
                <img src={notfound} alt="Seccion Mapa"/>
            </article>
        </>
    )
}