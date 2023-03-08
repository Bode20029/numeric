import React, { useState } from 'react'
import { parse, evaluate, pow, factorial, derivative, simplify, print } from 'mathjs'

const Taylor = () => {
    const [f, setf] = useState();
    const [x0, setx0] = useState(0);
    const [x, setx] = useState(0);
    const [n, setn] = useState(0);
    const [ans, setAns] = useState(0);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let inputfx = e.target.inputfx.value;
        let inputx0 = e.target.inputx0.value;
        let inputx = e.target.inputx.value;
        let inputn = e.target.inputn.value;
        setx0(parse(inputx0).evaluate());
        setx(parse(inputx).evaluate());
        setn(parse(inputn).evaluate());
        let scope;
        scope={
            x:x0,
        }
        setf(evaluate(inputfx,scope));
        console.log(f);
        console.log(x0);
        console.log(x);
        console.log(n);
        calculate(inputfx,x0,x,n)

    }

    const calculate = (c_f,c_x0,c_x,c_n) => {
        let i = 0;
        let fx;
        let answer = 0;
        console.log(c_f);
        do {
            if(i>0) {
                fx=derivative(fx,'x').toString();
                console.log(fx);
                answer+=parse(fx).evaluate({x:c_x0})+pow((c_x-c_x0),c_n)/factorial(c_n);
                i++;
            } else if (i==0) {
                fx=c_f
                console.log(fx);
                answer+=parse(fx).evaluate({x:c_x0})+pow((c_x-c_x0),c_n)/factorial(c_n);
                i++;
            }
        }while(i<c_n)
        setAns(answer);
        console.log(ans);

    }
    const resetAll = () => {
        setf("");
        setx0(0);
        setx(0);
        setn(0);
        const form = document.getElementById("taylor-input");
        form.reset();
    }

    return (
        <div style={{ padding: "10px" }}>
            <h4>Taylor series calculate</h4>
            <form id="taylor-input" onSubmit={(e) => { onSubmitHandler(e) }}>
                <label for="fx">&nbsp; Enter f(x)</label>
                <br />
                <input required type="text" id="fx" name="inputfx" className="form-control" placeholder="Enter function" style={{ borderColor: "black", borderRadius: "5px" }} />
                <br />
                <label for="x0">&nbsp; Enter x0</label>
                <br />
                <input required type="number" id="x0" name="inputx0" className="form-control" placeholder="Enter x0" style={{ borderColor: "black", borderRadius: "5px" }} />
                <br />
                <label for="x">&nbsp; Enter x</label>
                <br />
                <input required type="number" id="x" name="inputx" className="form-control" placeholder="Enter x" style={{ borderColor: "black", borderRadius: "5px" }} />
                <br />
                <label for="n">&nbsp; Enter n</label>
                <br />
                <input required type="number" id="n" name="inputn" className="form-control" placeholder="Enter n" style={{ borderColor: "black", borderRadius: "5px" }} />
                <br />
                <div className="right-align">
                    <button type="submit" className="btn btn-primary btn-block" id="to-calculate" value="calculate" style={{ marginTop: "2vh" }}>Calculate</button>
                    <button type="reset" className="btn btn-primary btn-block" value="Reset" style={{ marginTop: "2vh", backgroundColor: "red", borderColor: "red", marginLeft: "10px" }} onClick={() => {
                        resetAll();
                    }}>Reset form</button>
                </div>
                <br/>
                <h4>
                    Answer ={ans}
                </h4>

            </form>
        </div>
    )
}

export default Taylor;