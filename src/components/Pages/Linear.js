import React from 'react'
import { useState } from 'react';
import { Form,FormLabel,FormGroup,Button } from 'react-bootstrap';

const Linear = () => {
    const [n, setN] = useState(0);
    const [x,setX] = useState(0);
    const [inputA, setInputA] = useState([]);
    const [inputB, setInputB] = useState([]);
    const [a0, setA0] = useState(0);
    const [a1, setA1] = useState(0);
    const [result,SetResult] = useState(0);
    const createTable = (n) => {
        const a = [];
        const b = [];
        
        for(let i=0; i<n; i++){
            a.push(<input id={`a${i}`} placeholder={`a${i}`} onChange={(e) => setInputA({...inputA, [i]: e.target.value})}></input>)
            b.push(<input id={`b${i}`} placeholder={`b${i}`} onChange={(e) => setInputB({...inputB, [i]: e.target.value})}></input>)
        }
        
        return (
            <div>
                {a}
                {b}
            </div>
        );
    }

    const inputSize = (e) => {
        setN(e.target.value);
    };
    const inputX = (e) => {
        setX(e.target.value);
    }
    
    const calculateRegression = () => {
        let sumX = 0;
        let sumY = 0;
        let sumXY = 0;
        let sumXX = 0;
        let len = Object.keys(inputA).length;
        
        for(let i=0; i<len; i++){
            sumX += parseInt(inputA[i]);
            sumY += parseInt(inputB[i]);
            sumXY += parseInt(inputA[i]) * parseInt(inputB[i]);
            sumXX += parseInt(inputA[i]) * parseInt(inputA[i]);
        }
        
        let a1 = ((len * sumXY) - (sumX * sumY)) / ((len * sumXX) - (sumX * sumX));
        let a0 = (sumY - (a1 * sumX)) / len;
        let result = a0 + a1*x;
        SetResult(result);
        setA0(a0);
        setA1(a1);
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <FormLabel>Input Size</FormLabel>
                    <br />
                    <input type="number" onChange={inputSize}></input>
                    <FormLabel>Input X</FormLabel>
                    <br />
                    <input type="number" onChange={inputX}></input>
                    <br />
                    <br />
                    <div>{createTable(n)}</div>
                    <Button variant="primary" onClick={calculateRegression}>Calculate Regression</Button>
                </FormGroup>
            </Form>
            <br />
            <div>
                y = {a0} + {a1}x
            </div>
            <div>
                {'f('+x+') = '+result}
            </div>
        </div>
    )
}

export default Linear
