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

function App() {


  return (
    <div className="App">
      <header >
        <Header />
        <MenuBar />
      </header>
      <div>
        <Switch style={{margin:'0px', padding:'0'}}>
          <Router history={browserHistory}>
            <Route exact path='/' component={Body} />
            <Route  path='/Reglamento/Estudiantil' component={ReglamentoEstudiantil} />
          </Router>
        </Switch>
      </div>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
