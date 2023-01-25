import logo from './logo.svg';
import './App.css';

import Contact from './components/constact';
import {Route, Routes} from "react-router-dom"
import Home from './Home';
function App() {

 
  
  return (
    <div className="App">
      
        <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
