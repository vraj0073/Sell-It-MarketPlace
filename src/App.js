import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Conformation } from './compnents/Conformation';
import { Register } from './compnents/Register';
import { Login } from './compnents/Login';
function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/conformation' element={<Conformation />}></Route>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
