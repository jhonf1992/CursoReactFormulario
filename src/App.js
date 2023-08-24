import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from "./componentes/MiOrg/index";
import {useState} from 'react';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div >
      <Header/>
      {mostrarFormulario === true ? <Formulario ></Formulario> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    </div>
  );
}

export default App;
