import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props // Destructuramos props.registrarColaborador
    const manejarEnvio = (evento) => {  // Evento puede ser puesto como evento, o event o simplemente e, lo importante es que hace referencia al evento que se esta llamando
        evento.preventDefault();
        let datosAEnviar ={
            nombre : nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo = (evento) =>{
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
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
                equipos={props.equipos}
                />   
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el Equipo.</h2>
                <CampoTexto titulo="Titulo" 
                placeholder='Ingresar nombre de equipo' 
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}/>
                <CampoTexto titulo="Color" 
                placeholder='Ingresar Color Hex' 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
                <Boton>
                    Registrar equipo
                </Boton>
            </form>    
        </section>
    )
};
export default Formulario;
