import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import localforage from 'localforage';

function Cart({ item, onDelete }) {
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

  const [status, setStatus] = useState(statusList[0].value);

  const statusHandler = (e) => {
    setStatus(e.value);
  };

  // if (item.length > 0) {
  //   localforage.getItem(item.id).then((item) => {
  //     item.status = { status };
  //     localforage.setItem(item.id, item);
  //   });
  // }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: 'none',
      border: 'none',
      // minHeight: '22px',
      // height: '22px',
      width: '122px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      // height: '22px',
      padding: '0 6px',
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: (state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      // height: '22px',
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
          defaultValue={statusList[0]}
          styles={customStyles}
        />
        {/* <select>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="unavailable">Unavailable</option>
        </select> */}
      </div>
    </div>
  );
}

export default Cart;
