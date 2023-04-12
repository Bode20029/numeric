import React, {useState} from 'react'
import { Button, Container, Form, FormGroup, FormLabel, Table } from 'react-bootstrap'
import { evaluate } from 'mathjs'

const Final = () => {
    const plottable = () =>{
        SetValueXstart(data.map((element) => element.XL));
        SetValueXstop(data.map((element) => element.XR));
        return(
            <Container>
                <Table variant='dark'>
                    <thead>
                        <tr>
                            
                            <th>x</th>
                            <th>y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) =>{
                            return (
                                <tr key={index}>
                            <td>{element.XL}</td>
                            <td>{element.XR}</td>
                        </tr>)
                        })}
                        
                    </tbody>
                </Table>
            </Container>
        );
    }
    const print = (xl,xr) => {
        
        var fx;
        var iter = xl;
        var end = xr;
        var obj = {};
        
        do{
            
            fx = evaluate(Equation, { x: iter }).toString();
            
            obj ={
                XL:iter,
                XR:fx
            }
            data.push(obj);
            iter++;
        }while(iter<=end)
        
        
        
    }

    const data = [];
    //for mapping
    const [valueXstart, SetValueXstart] = useState([]);
    const [valueXstop, SetValueXstop] = useState([]);
    const [screen, SetScreen] = useState();
    
    const [Equation, SetEquation] = useState("(x^4)-13")
    const [XL,setXL] = useState(0);
    const [XR,setXR] = useState(0);
    
    const inputEquation = (e) => {
        console.log(e.target.value);
        SetEquation(e.target.value);
    }
    const inputXL = (e) => {
        console.log(e.target.value);
        setXL(e.target.value);
    }
    const inputXR = (e) => {
        console.log(e.target.value);
        setXR(e.target.value);
    }
    const calculate = () => {
        const xlnum = parseFloat(XL);
        const xrnum = parseFloat(XR);
        print(xlnum,xrnum);
        SetScreen(plottable());
    }
    return (
    <div>
        <Form>
            <FormGroup>
                <FormLabel> Input Equation</FormLabel>
                <br></br>
                <input type="text" onChange={inputEquation}  value={Equation}></input> 
                <br></br>
                <FormLabel>Input start</FormLabel>
                <br></br>
                <input type="number" onChange={inputXL}></input>
                <br></br>
                <FormLabel>Input stop</FormLabel>
                <br></br>
                <input type="number" onChange={inputXR}></input>

            </FormGroup>
            <Button onClick={calculate}> Calculate </Button>
        </Form>
        <br></br>
        <div> {screen} </div>
    </div>
  )
}

export default Final