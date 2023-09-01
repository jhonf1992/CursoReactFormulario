import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    // Vamos a iterar con el metodo Map NO con ForEach
    // Estructura del metodo Map => arreglo.map((equipo, index) => {
    // return <option></option>
    //})
    // const equipos = [// Creamos el arreglo con los datos de las opciones que tendremos
    //     "Programación",
    //     "Front-End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Movil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value);
    }
    return(
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { props.equipos.map((equipo, index)=>{
                    return <option key={index} value={equipo}>{equipo}</option>  // Retornamos una Etiqueta select con varias opciones
                })}
            </select>
        </div>
    )
}

export default ListaOpciones;