import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Login from './component/login/login';
import Register from './component/register/register';



function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Login />}/>
      </Routes>    
    
  );
}

export default App;
