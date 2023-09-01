import "./CampoTexto.css"
import { useState } from "react";


const CampoTexto = (props) =>{

    // Destructuramos Type de las propiedades del formulario

    const {type="text"} = props;

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />
        </div>
    )
}
export default CampoTexto; 