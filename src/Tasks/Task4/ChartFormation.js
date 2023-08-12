import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

function ChartFormation() {
  const [box1Value, setBox1Value] = useState("");
  const [box2Value, setBox2Value] = useState("");
  const [chartData, setChartData] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");

  const handleChangeBox1 = (e) => {
    const value = e.target.value;
    if (value <= 100) {
      setBox1Value(value);
      setBox2Value(100 - value);
      setValidationMessage("");
    } else {
      setValidationMessage("incorrect value");
    }
  }

  const handleChangeBox2 = (e) => {
    const value = e.target.value;
    if (value <= 100) {
      setBox2Value(value);
      setBox1Value(100 - value);
      setValidationMessage("");
    } else {
      setValidationMessage("incorrect value");
    }
  }

  const handleCreateChart = (e) => {
    e.preventDefault();

    const data = {
      labels: ['Box 1', 'Box 2'],
      datasets: [
        {
          data: [box1Value, box2Value],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };

    setChartData(data);
  }

  return (
    <div>
      <form>
        <div className="container col-sm-6 offset-sm-3 mt-5">
          <div className="row mb-4">
            <div className="col">
              <label>Box 1</label>
              <input onChange={handleChangeBox1} type="number" className="form-control" value={box1Value} />
            </div>
            <div className="col">
              <label>Box 2</label>
              <input onChange={handleChangeBox2} type="number" className="form-control" value={box2Value} />
            </div>
          </div>
          <button onClick={handleCreateChart} className="col-sm-12 btn btn-primary">Create Chart</button>
          {validationMessage && <p className="text-danger mt-3">{validationMessage}</p>}
        </div>
      </form>
      {chartData && (
        <div style={{ width: '400px', height: '400px' }}>
          <Pie data={chartData} />
        </div>
      )}
    </div>
  )
}

export default ChartFormation;
