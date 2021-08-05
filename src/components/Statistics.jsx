import React from 'react';

function Statistics({ bike }) {
  return (
    <div className="statistic">
      <h1>STATISTIC</h1>
      <ul>
        <li>
          Total Bikes: <span className="bold">{bike.length}</span>
        </li>
        <li>
          Available Bikes: <span className="bold">0</span>
        </li>
        <li>
          Booked Bikes: <span className="bold">0</span>
        </li>
        <li>
          Average bike cost: <span className="bold">0.00</span> UAH/hr
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
