import { Input } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, FormLabel, Row,Container,Table } from 'react-bootstrap'
import { evaluate } from 'mathjs'
const FalseMethod3 = () => {
    const print = () =>{
        console.log(data)
        SetValueIter(data.map((x)=>x.iteration));
        SetValueXL(data.map((x)=>x.XL));
        SetValueXM(data.map((x)=>x.XM));
        SetValueXR(data.map((x)=>x.XR));
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
                                <td>{element.XL}</td>
                                <td>{element.XM}</td>
                                <td>{element.XR}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }
    const error = (xold,xnew) => Math.abs((xnew-xold)/xnew) * 100;
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
                    XL:xl,
                    XM:xm,
                    XR:xr
                }
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    XL:xl,
                    XM:xm,
                    XR:xr
                }
                data.push(obj)
                xl = xm;
            }
        }while(ea>e && iter<MAX)
        SetX(xm)
    }
    const data = [];
    const [ValueIter,SetValueIter] = useState([]);
    const [ValueXL,SetValueXL] = useState([]);
    const [ValueXR,SetValueXR] = useState([]);
    const [ValueXM,SetValueXM] = useState([]);

    const [html,SetHtml] = useState(null);
    const [Equation,SetEquation] = useState("(x^4)-13")
    const [X,SetX] = useState(0)
    const [XL,SetXL] = useState(0)
    const [XR,SetXR] = useState(0)
    const inputEquation = (event) => {
        console.log(event.target.value);
        SetEquation(event.target.value);
    }
    const inputXL = (event) => {
        console.log(event.target.value);
        SetXL(event.target.value);
    }
    const inputXR = (event) => {
        console.log(event.target.value);
        SetXR(event.target.value);
    }
    const calculateRoot= () => {
        const xlnum = parseFloat(XL);
        const xrnum = parseFloat(XR);
        CalFalseMethod(xlnum, xrnum);
        SetHtml(print());
    }
  
    return (
    <div>
        <Row>
            <div md="auto" className="text-center mb-4">
                <h1 className="justify-content-center">False Position Method</h1>
            </div>
        </Row>
        <Form>
            <FormGroup className='mb-3'>
                <FormLabel> Input f(x) </FormLabel>
                <input type="text" id="equation" value={Equation} style={{width: "20%", margin: "0 auto" }} onChange={inputEquation} className="form-control"></input>
                <FormLabel> input XL </FormLabel>
                <input type="number" id="XL" style={{width: "20%", margin: "0 auto" }} onChange={inputXL} className="form-control"></input>
                <FormLabel> input XR </FormLabel>
                <input type="number" id="XR" style={{width: "20%", margin: "0 auto" }} onChange={inputXR} className="form-control"></input>
            </FormGroup>
            <Button variant='dark' onClick={calculateRoot}>
                Calculate
            </Button>
        
        </Form>
        <h5>Answer = {X.toPrecision(7)}</h5>
        <div>{html}</div>




        
    </div>
  )
}

export default FalseMethod3
