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
import SoporteEstudiantil from './components/soporte/SoporteEstudiantil';
import Registro from './components/soporte/slides/registro/Registro';
import Plataforma from './components/soporte/slides/plataforma/Plataforma';

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
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/' component={Registro} />
              <Route path='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/' component={Plataforma} />
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
