import Bisection from "./components/Pages/Bisection"
import FalseMethod from "./components/Pages/FalseMethod"
import FalseMethod2 from "./components/Pages/FalseMethod2"
import FalseMethod3 from "./components/Pages/FalseMethod3"
import Taylor from "./components/Pages/Taylor"
import Newton_raphson from "./components/Pages/Newton-Raphson2"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from "./components/Menu/Navbar"
import Home from "./components/Home"
import Final from "./components/Pages/Final"

function App() {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
   
   <BrowserRouter>
   <Navbar/>
    <section>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Bisection" element={<Bisection/>}></Route>
      <Route path="/FalseMethod" element={<FalseMethod/>}></Route>
      <Route path="/FalseMethod2" element={<FalseMethod2/>}></Route>
      <Route path="/FalseMethod3" element={<FalseMethod3/>}></Route>
      <Route path="/Newton-Raphson" element={<Newton_raphson/>}></Route>
      <Route path="/Final" element={<Final/>}></Route>
      <Route path="/Taylor" element={<Taylor/>}></Route>
    </Routes>
      
    </section> 
    </BrowserRouter>  
    </div>

  );
}

export default App;
