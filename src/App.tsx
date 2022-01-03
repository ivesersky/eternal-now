import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/routes';
import './styles/defaults.scss';
import './styles/variables.scss';
import '../src/fonts/aktiv-grotesk.css';


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;