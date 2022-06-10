import { useState } from 'react';
import contact from '../Icons/contact.svg';
export function Conctacto({size = '6'}){
    const [copied, setCopied] = useState(false);
    return (
        <>
            <article className={`col-12 col-md-${size} p-2 b-shadow recursos slideOut`}>
                <h2>Seccion Contacto</h2>
                <img src={contact} alt="seccion contacto"/>
                <br/>
                    <i>Puedes mandarme un mail a: <span title='Copiar Mail' onClick={(e)=>{navigator.clipboard.writeText(e.target.textContent).then(res=>setCopied(true))}}>cristiangramajo015@gmail.com</span></i><span style={{padding:'0.3em', borderRadius:'0.2em'}}>{copied ? '✅' : '📋'}</span><i>si quieres hablarme.
                <br/>
                <br/>
                Para ver mas sobre mi y mis trabajos:<br/> <a href='https://cristian021195.github.io/portfolio/' alt="portafolio web del autor">Cristian Ismael Gramajo</a>
                </i>
            </article>
        </>
    )
}