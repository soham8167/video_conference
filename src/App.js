import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Joinn from './Components/Joinn';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< LogIn/>} /> 
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/joinn' element={<Joinn/>} /> 
        <Route path='/about' element={<AboutPage/>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
