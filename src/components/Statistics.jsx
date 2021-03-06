import React from 'react';

function Statistics({ bike }) {
  const aver = [];
  bike.forEach((item) => aver.push(item.price));
  const toNumber = (arr) => arr.map(Number);
  const result = toNumber(aver);

  const averResult = result.reduce((sum, current) => {
    return sum + current;
  }, 0);
  const average = Math.floor(averResult / bike.length);

  const available = [];
  bike.forEach((item) => available.push(item.status));
  const avalFinall = available.filter((e) => e === 'available');

  const book = bike.length - avalFinall.length;

  return (
    <div className="statistic">
      <h1>STATISTIC</h1>
      <ul>
        <li>
          Total Bikes: <span className="bold">{bike.length}</span>
        </li>
        <li>
          Available Bikes: <span className="bold">{avalFinall.length}</span>
        </li>
        <li>
          Booked Bikes: <span className="bold">{book}</span>
        </li>
        <li>
          Average bike cost: <span className="bold">{bike.length > 0 ? average : 0}</span> UAH/hr
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
