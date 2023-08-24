import "./MiOrg.css"
import {useState} from "react";


// Concepto de estado useState 
// estructura => const [nombreVariable, funcionalidadActualiza] = useState(ValorInicial)
const MiOrg = (props) =>{
    console.log(props)
    
    return(
        <section className='orgSection'>
            <h3 className='title'>Mi Organización</h3>
            <img src="/img/Add.png" alt="Add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg;