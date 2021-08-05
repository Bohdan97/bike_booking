import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import localforage from 'localforage';

function Cart({ item, onDelete, availableBike }) {
  const statusList = [
    {
      value: 'available',
      label: 'Available',
    },
    {
      value: 'busy',
      label: 'Busy',
    },
    {
      value: 'unavailable',
      label: 'Unavailable',
    },
  ];

  const [status, setStatus] = useState(item.status);

  const statusHandler = (e) => {
    setStatus(e.value);
    availableBike(item.id, e.value);
    localforage.getItem(item.id).then((item) => {
      item.status = e.value;
      localforage.setItem(item.id, item);
    });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: 'none',
      border: 'none',
      minHeight: '22px',
      height: '22px',
      width: '122px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '22px',
      padding: '0 6px',
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
      height: '22px',
      overflow: 'hidden',
    }),
    indicatorSeparator: (state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '22px',
    }),
  };

  return (
    <div className={status}>
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
        <Select
          options={statusList}
          onChange={statusHandler}
          defaultValue={statusList.find((x) => x.value === item.status)}
          styles={customStyles}
        />
      </div>
    </div>
  );
}

export default Cart;
