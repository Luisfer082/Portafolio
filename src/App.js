import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import tarjetas from './models/tajetas.json'
import CardsTec from './components/cards/CardsTec';
import Proyects from './pages/Proyects';
import Registro from './pages/Registro/Registro';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <Proyects />
        <Registro />
        <Footer />
        
      <Routes>
        <Route>
          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
