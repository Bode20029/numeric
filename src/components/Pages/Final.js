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
    // Extract X and Y values from the data array
    const xValues = data.map((point) => point.XL);
    const yValues = data.map((point) => point.XR);

    // Calculate the linear regression line
    const n = xValues.length;
    let xSum = 0;
    let ySum = 0;
    let xySum = 0;
    let xSquaredSum = 0;
    for (let i = 0; i < n; i++) {
      xSum += xValues[i];
      ySum += yValues[i];
      xySum += xValues[i] * yValues[i];
      xSquaredSum += xValues[i] ** 2;
    }
    const slope =
      (n * xySum - xSum * ySum) / (n * xSquaredSum - xSum ** 2);
    const intercept = (ySum - slope * xSum) / n;
    const regressionLine = xValues.map((x) => ({
      x,
      y: slope * x + intercept,
    }));

    // Create the chart data
    const options = {
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return value.toLocaleString();
              },
              stepSize: 5, // Add this line to set the tick interval to 5
            },
          },
        },
      };
    const dataset1 = {
      label: "Function Values",
      data: data.map((point) => ({ x: point.XL, y: point.XR })),
      backgroundColor: "rgba(255, 99, 132, 1)",
      pointRadius: 5,
    };
    const dataset2 = {
      label: "Linear Regression",
      data: regressionLine,
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
      fill: false,
      width: 500,
      heigh: 300,
      pointRadius: 0,
      type: "line", //
        };
        const chartData = {
          datasets: [dataset1, dataset2],
        };
      
        // Render the chart
        return <Scatter options={options} data={chartData} />;
      };
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
  const [Equation, setEquation] = useState("a+bx");
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