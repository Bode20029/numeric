import Bisection from "./components/Pages/Bisection"
import FalseMethod from "./components/Pages/FalseMethod"
import OnePoint from "./components/Pages/OnePoint"
import Taylor from "./components/Pages/Taylor"
import Navbarbode from "./components/Menu/Navbar"
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
   <div>
   
    <Navbarbode/>
   {/**  <Routes>
      <Route path="/" element={""}></Route>
      <Route path="/Bisection" element={<Bisection/>}></Route>
      <Route path="/FalseMethod" element={<FalseMethod/>}></Route>
      <Route path="/OnePoint" element={<OnePoint/>}></Route>
      <Route path="/Taylor" element={<Taylor/>}></Route>
    </Routes>
      <FalseMethod/>
  **/}
      </div>

  );
}

export default App;
