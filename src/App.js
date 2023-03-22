import Bisection from "./components/Pages/Bisection"
import FalseMethod from "./components/Pages/FalseMethod"

import Taylor from "./components/Pages/Taylor"
import Newton_raphson from "./components/Pages/Newton-Raphson2"
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Menu/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
   
   
   <Navbar/>
    <section>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Bisection" element={<Bisection/>}></Route>
      <Route path="/FalseMethod" element={<FalseMethod/>}></Route>
      <Route path="/Newton-raphson" element={<Newton_raphson/>}></Route>
      <Route path="/Taylor" element={<Taylor/>}></Route>
    </Routes>
      
    </section> 
      </div>

  );
}

export default App;
