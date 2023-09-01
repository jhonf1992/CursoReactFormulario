import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from "./componentes/MiOrg/index";
import {useState} from 'react';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import {v4 as uuid} from 'uuid';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condicion ? seMuestra : noSeMuestra
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    favorito: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    favorito: true
  }]); // inicializamos un arreglo vacio

  const [equipos, actualizarEquipos] = useState([// Creamos el arreglo con los datos de las opciones que tendremos
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57c278",
    colorSecundario: "#d9f7e9"
  },
  {
    id: uuid(),
    titulo: "Front-End",
    colorPrimario: "#82cffa",
    colorSecundario: "#e8f8ff"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#a6d157",
    colorSecundario: "#f0f8e2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#e06b69",
    colorSecundario: "#fde7e8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#db6ebf",
    colorSecundario: "#fae9f5"
  },
  {
    id: uuid(),
    titulo: "Movil",
    colorPrimario: "#ffba05",
    colorSecundario: "#fff5d9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#ff8a29",
    colorSecundario: "#ffeedf"
  }

])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador)
    // Spread operator para crear una copia de los datos actuales y le sumamos el colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador

  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id;
    })
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo

  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  // Crear equipo

  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }

  // Crear favorito

  const like = (id) =>{
    
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  }
  
  return (
    <div >
      <Header/>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}></Formulario> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar} ></MiOrg>
      {
        equipos.map( (equipo) =>{
          return <Equipo datos={equipo} key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }
      <Footer/>
    </div>
    
  );
}

export default App;
