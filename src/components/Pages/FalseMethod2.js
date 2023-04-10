
import React from 'react'
import { useState } from 'react'
import { Form,Button,Table, FormLabel, FormControl, Container, Row } from 'react-bootstrap';
import { evaluate} from 'mathjs';


const FalseMethod2 = () => {
  const print = () =>{
    console.log(data)
    SetIteration(data.map((x)=>x.iteration));
    SetValueXl(data.map((x)=>x.Xl));
    SetValueXm(data.map((x)=>x.Xm));
    SetValueXr(data.map((x)=>x.Xr));
    return(
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th width="10%">Iteration</th>
                        <th width="30%">XL</th>
                        <th width="30%">XM</th>
                        <th width="30%">XR</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>{element.iteration}</td>
                            <td>{element.Xl}</td>
                            <td>{element.Xm}</td>
                            <td>{element.Xr}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
       
    );

  }
  const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
  const CalFalseMethod = (xl, xr) => {
    var xm,fXm,fXr,fXl,ea,scope;
    var iter = 0;
    var MAX = 50;
    const e = 0.00001;
    var obj={};
    do
    {
        
        
      scope = {
        x:xr,
    }
    fXr = evaluate(Equation, scope)

    

    scope = {
        x:xl,
    }
    fXl = evaluate(Equation, scope)
    xm = ((xl*fXr)-(xr*fXl))/(fXr-fXl)
    scope = {
        x:xm,
    }

    
    fXm = evaluate(Equation, scope)
    iter ++;
    if (fXm*fXr > 0)
    {
        ea = error(xr, xm);
        obj = {
            iteration:iter,
            Xl:xl,
            Xm:xm,
            Xr:xr
        }
        data.push(obj)
        xr = xm;
    }
    else if (fXm*fXr < 0)
    {
        ea = error(xl, xm);
        obj = {
            iteration:iter,
            Xl:xl,
            Xm:xm,
            Xr:xr
        }
        data.push(obj)
        xl = xm;
    }
    }while(ea>e && iter<MAX)
    setX(xm)
}
  const data = [];
  const [iteration,SetIteration] = useState([]);
  const [ValueXl,SetValueXl] = useState([]);
  const [ValueXm,SetValueXm] = useState([]);
  const [ValueXr,SetValueXr] = useState([]);
  const [html, setHtml] = useState(null)
  const [Equation,setEquation] = useState("(x^4)-13 ")
  
  const [X,setX] = useState(0)
  const [XL,setXL] = useState(0)
  const [XR,setXR] = useState(0)

  const inputEquation = (event) => {
    console.log(event.target.value);
    setEquation(event.target.value);
  }
  const inputXL = (event) => {
    
    console.log(event.target.value);
    setXL(event.target.value);
  }

  const inputXR = (event) => {
    console.log(event.target.value);
    setXR(event.target.value);
  }

  const calculate = () =>{
    const xlnum = parseFloat(XL);
    const xrnum = parseFloat(XR);
    CalFalseMethod(xlnum,xrnum);
    setHtml(print());
    console.log(iteration);
    console.log(ValueXl)
  }
  const myStyle = {
    color: "white",
    backgroundColor: "black",
    
  };
  const input = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
  
  
    return (
    <div >
     <form>
        <Row >
          <div>
            <h1>False Position</h1>
            </div>
         </Row>
         <div style={{justifyContent: "center",alignItems: "center",textAlign: "center", backgroundColor:"white",width: "auto" }}>
         <Form.Group style={{justifyContent: "center",alignItems: "center",textAlign: "center"}}>
            <FormLabel>
                Input f(x)
            </FormLabel>
            <FormControl type="text"  style={input} value={Equation} onChange={inputEquation}/> 
          </Form.Group>  
            <Form.Group>
            <FormLabel>
                Input XL
            </FormLabel>
            
            
            <FormControl type="number"  style={input} onChange={inputXL} /> 
            </Form.Group>
            <Form.Group>
            <FormLabel>
                Input XR
            </FormLabel>
            
            <FormControl type="number" style={input} onChange={inputXR} /> 
            </Form.Group>
            <Form.Group>
                <Button type="submit" style={myStyle} onClick={calculate}>Calculate</Button>
                
            </Form.Group>
            
            </div>
            </form>
            <br/>
            <h5>Answer = {X.toPrecision(7)}</h5>
            <Container>{html}</Container>
    </div>
  )
}

export default FalseMethod2
