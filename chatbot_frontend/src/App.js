import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar';
import { Route, Router } from 'react-router-dom';
import browserHistory from './router_config/History'
import Switch from 'react-bootstrap/esm/Switch';
import ReglamentoEstudiantil from './views/ReglamentoEstudiantil';
import Registro from './components/soporte/tiposoporte/registro/Registro';
import Plataforma from './components/soporte/tiposoporte/plataforma/Plataforma';
import Pagos from './components/soporte/tiposoporte/pagos/Pagos';
import Faltas from './components/soporte/tiposoporte/faltas/Faltas';
import ClasesVirturales from './components/soporte/tiposoporte/clases/ClasesVirtuales';
import SoporteEstudiantil from './components/soporte/SoporteEstudiantil';
import Materias from './components/soporte/tiposoporte/materias/Materias';
import Notass from './components/soporte/tiposoporte/notas/Notas';
import SoporteDocente from './components/soporte/SoporteDocente';
import SoporteAdministrativo from './components/soporte/SoporteAdministrativo';

function App() {


  return (
    <div className="App">
      <header >
        <Header />
        <MenuBar />
      </header>
      <div>
        <Switch style={{ margin: '0px', padding: '0' }}>
          <div style={{ height: '495px', backgroundColor: '#ffffff8a', border: "solid", borderColor: '#08A5DF', borderRadius: '10px' }}>
            <Router history={browserHistory}>
              <Route exact path='/' component={Body} />
              <Route path='/Reglamento/Estudiantil' component={ReglamentoEstudiantil} />
              <Route exact path='/Soporte/Estudiantil' component={SoporteEstudiantil} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Clases Virtuales/' component={ClasesVirturales} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/' component={Registro} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/' component={Plataforma} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Pagos/' component={Pagos} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Faltas/' component={Faltas} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Materias/' component={Materias} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Notas/' component={Notass} />


              <Route exact path='/Soporte/Docentes' component={SoporteDocente} />
              <Route exact path='/Soporte/Administrativo' component={SoporteAdministrativo} />
            </Router>
          </div>

        </Switch>
      </div>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
