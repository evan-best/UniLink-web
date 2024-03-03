import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hamburger from './components/Hamburger/Hamburger';
import './App.css';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;