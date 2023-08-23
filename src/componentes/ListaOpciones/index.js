import "./ListaOpciones.css"

const ListaOpciones = () =>{

    // Vamos a iterar con el metodo Map NO con ForEach
    // Estructura del metodo Map => arreglo.map((equipo, index) => {
    // return <option></option>
    //})
    const equipos = [// Creamos el arreglo con los datos de las opciones que tendremos
        "Programación",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión"
    ]
    return(
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select >
                { equipos.map((equipo, index)=>{
                    return <option key={index}>{equipo}</option>  // Retornamos una Etiqueta select con varias opciones
                })}
            </select>
        </div>
    )
}

export default ListaOpciones;