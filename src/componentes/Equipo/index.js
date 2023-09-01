import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) =>{
    // DESTRUCTURACION: podemos traer los datos y hacer un codigo mas simple
    // const {colorPrimario, colorSecundario, titulo} = props.datos; <= asi tendriamos una constante
    // que almacena todos los datos, abajo ya no tendriamos que usar el props.datos

    // Destructuramos el arreglo colaboradores
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    const {id} = props.datos;
    const color = {   // Creamos la variable que traera el dato del color de la propiedad del componente equipo en el archivo app.js
        backgroundColor : hexToRgba(props.datos.colorPrimario, 0.6)
    }
    return(  //llamamos la variable color en el campo de estilo inline
        <>{ colaboradores.length > 0 &&
        <section className='equipo' style={color}> 
            <input 
            type="color"
            className='input-color'
            value={props.datos.colorPrimario}
            style={color}
            onChange={(event) =>{
                actualizarColor(event.target.value, props.datos.id);
            }}
            />
            <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
            <div className='colaboradores'>
                {
                    colaboradores.map((colaborador,index) =>{ return(<Colaborador datos={colaborador} 
                    key={index}  colorPrimario={props.datos.colorPrimario}
                    eliminarColaborador={eliminarColaborador} like={like}/>)})
                }
            </div>
        </section>
    }</>)
}
export default Equipo;