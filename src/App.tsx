import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/routes';
import './styles/defaults.scss';
import './styles/variables.scss';


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;