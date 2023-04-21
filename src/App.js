import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import tarjetas from './models/tajetas.json'
import CardsTec from './components/cards/CardsTec';

function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        
      <Routes>
        <Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
