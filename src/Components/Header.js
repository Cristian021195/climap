import { NavLink } from "react-router-dom"

export function Header(){
    return (
        <header>
            <nav>
                <ul className='d-flex-centered'>
                    <li id="inicio">
                        <NavLink to={'inicio'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Inicio</NavLink>
                    </li>
                    <li id="clima">                        
                        <NavLink to={'clima'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Clima</NavLink>
                    </li>
                    <li id="mapa">
                        <NavLink to={'mapa'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Mapa</NavLink>
                    </li>
                    <li id="recursos">
                        <NavLink to={'recursos'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Recursos</NavLink>
                    </li>
                    <li id="contacto">
                        <NavLink to={'contacto'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
//<NavLink onClick={()=>setTitle(_link.alias)} key={_index} to={_link.link} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>{_link.alias}</NavLink>

/*export function Header(){
    return (
        <header>
            <nav>
                <ul className='d-flex-centered'>
                    <li id="inicio" onClick={(e)=>{console.log(e.target.id)}}>
                        Inicio
                    </li>
                    <li id="clima" onClick={(e)=>{console.log(e.target.id)}}>                        
                        Clima
                    </li>
                    <li id="mapa" onClick={(e)=>{console.log(e.target.id)}}>
                        Mapa
                    </li>
                    <li id="recursos" onClick={(e)=>{console.log(e.target.id)}}>
                        Recursos
                    </li>
                    <li id="contacto" onClick={(e)=>{console.log(e.target.id)}}>
                        Contacto
                    </li>
                </ul>
            </nav>
        </header>
    )
}*/