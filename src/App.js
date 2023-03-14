import Bisection from "./components/Bisection"
import FalseMethod from "./components/FalseMethod"
import OnePoint from "./components/OnePoint"
import Taylor from "./components/Taylor"
import { Route,Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <Routes>
      <Route path="/Bisection" element={<Bisection/>}></Route>
      <Route path="/FalseMethod" element={<FalseMethod/>}></Route>
      <Route path="/OnePoint" element={<OnePoint/>}></Route>
      <Route path="/Taylor" element={<Taylor/>}></Route>
    </Routes>
    </>
    

  );
}

export default App;
