import React, { useState } from "react";

const ClickCounter = () => {
  const [counterValue, updateCounterValue] = useState(0);
  return (
    <div className="container">
      <div className="contentWrapper border border-secondary rounded mt-4">
        <div className="countDisplay d-flex align-items-center justify-content-center bg-light display-2">
          {counterValue}
        </div>
        <div className="btnContainer d-flex flex-row">
          <button
            className="btn btn-success w-100"
            onClick={() => updateCounterValue(counterValue + 1)}
          >
            <i className="fa fa-2x fa-plus" />
          </button>
          <button
            className="btn btn-warning w-100"
            onClick={() => updateCounterValue(0)}
          >
            <i className="fa fa-2x fa-refresh" />
          </button>
          <button
            className="btn btn-danger w-100"
            onClick={() => updateCounterValue(Math.max(0, counterValue - 1))}
          >
            <i className="fa fa-2x fa-minus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClickCounter;
