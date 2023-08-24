import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio = (evento) => {  // Evento puede ser puesto como evento, o event o simplemente e, lo importante es que hace referencia al evento que se esta llamando
        evento.preventDefault();
        console.log("Manejar evento")
        let datosAEnviar ={
            nombre : nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log(datosAEnviar);
    }
    return(
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" 
                placeholder='Ingresar nombre' 
                required
                valor={nombre}
                actualizarValor={actualizarNombre}/>
                <CampoTexto titulo="Puesto" 
                placeholder='Ingresar Puesto' 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}/>
                <CampoTexto titulo="Foto" 
                placeholder='Ingresar enlace de foto' 
                required
                valor={foto}
                actualizarValor={actualizarFoto}/>
                <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                />   
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
};
export default Formulario;
