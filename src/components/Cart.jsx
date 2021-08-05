import React from 'react';
import { FaTimes } from 'react-icons/fa';
function Cart({ item, onDelete }) {
  return (
    <div className="wrapper">
      <span className="delete">
        <FaTimes onClick={() => onDelete(item.id)} />
      </span>
      <h2>
        <span className="bold">{item.name}</span> - {item.type} ({item.color})
      </h2>
      <span className="price_hr">{item.price} UAH/hr.</span>
      <p className="id">ID:{item.id}</p>

      <div className="status">
        <span>STATUS:</span>
        <select>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
    </div>
  );
}

export default Cart;
