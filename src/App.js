import Bisection from "./components/Pages/Bisection"
import FalseMethod from "./components/Pages/FalseMethod"
import OnePoint from "./components/Pages/OnePoint"
import Taylor from "./components/Pages/Taylor"
import { Route,Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
   // <>
    // <Routes>
    //   <Route path="/Bisection" element={<Bisection/>}></Route>
    //   <Route path="/FalseMethod" element={<FalseMethod/>}></Route>
    //   <Route path="/OnePoint" element={<OnePoint/>}></Route>
    //   <Route path="/Taylor" element={<Taylor/>}></Route>
    // </Routes>
      <FalseMethod/>
    //</>
    

  );
}

export default App;
