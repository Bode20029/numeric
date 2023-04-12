import React, { useState } from "react";
import { Button, Container, Form, FormGroup, FormLabel, Table } from "react-bootstrap";
import { evaluate } from "mathjs";
import { Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const Final = () => {
  const plottable = () => {
    return (
      <Container>
        <Table variant="dark">
          <thead>
            <tr>
              <th>x</th>
              <th>y</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.XL}</td>
                  <td>{element.XR}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  };

  const graph = () => {
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    const dataset1 = {
        datasets: [
          {
            label: 'Function Values',
            data: data.map((point) => ({ x: point.XL, y: point.XR })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5
          }
        ]
    };
    return <Scatter options={options} data={dataset1} />;
}
  const print = (xl, xr) => {
    let fx;
    let iter = xl;
    const end = xr;
    let obj = {};
    do {
      fx = evaluate(Equation, { x: iter }).toString();
      obj = {
        XL: iter,
        XR: fx,
      };
      data.push(obj);
      iter++;
    } while (iter <= end);
  };

  const [data, setData] = useState([]);
  const [valueXstart, setValueXstart] = useState([]);
  const [valueXstop, setValueXstop] = useState([]);
  const [screen, setScreen] = useState();
  const [Equation, setEquation] = useState("(x^4)-13");
  const [XL, setXL] = useState(0);
  const [XR, setXR] = useState(0);

  const inputEquation = (e) => {
    setEquation(e.target.value);
  };
  const inputXL = (e) => {
    setXL(e.target.value);
  };
  const inputXR = (e) => {
    setXR(e.target.value);
  };
  const calculate = () => {
    const xlnum = parseFloat(XL);
    const xrnum = parseFloat(XR);
    print(xlnum, xrnum);
    setValueXstart(data.map((element) => element.XL));
    setValueXstop(data.map((element) => element.XR));
    setScreen(<div>{plottable()}{graph()}</div>);
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <FormLabel>Input Equation</FormLabel>
          <br></br>
          <input type="text" onChange={inputEquation} value={Equation}></input>
          <br></br>
          <FormLabel>Input start</FormLabel>
          <br></br>
          <input type="number" onChange={inputXL}></input>
          <br></br>
          <FormLabel>Input stop</FormLabel>
          <br></br>
          <input type="number" onChange={inputXR}></input>
        </FormGroup>
        <Button onClick={calculate}>Calculate</Button>
     

        </Form>
        <br></br>
        <div> {screen} </div>
        
    </div>
  )
}

export default Final