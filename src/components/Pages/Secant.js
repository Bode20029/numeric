import { useState } from "react";
import { evaluate } from "mathjs"
import { Form, Button } from "react-bootstrap"


const Secant = () => {
    const data = []
    const [x,setx] = useState()
    const [iter,setIter] = useState() 
    const [Equation,setEquation] = useState()
    const [x1,setx1] = useState()

    return (
    <div>
      <Form.Group>
        <Form.Label>input f(x)</Form.Label>
      
          <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"> Equation</input>
        <Form.Label>x0</Form.Label>
        <Form.Label>x1</Form.Label>

      </Form.Group>

    </div>
  )
}

export default Secant