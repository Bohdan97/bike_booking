import React from 'react';
import { useState } from 'react';

const Form = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [wheel_size, setWheel_size] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');

  const saveBike = (e) => {
    e.preventDefault();
    onAdd({
      name,
      type,
      color,
      wheel_size,
      price,
      id,
      description,
    });

    setName('');
    setType('');
    setColor('');
    setWheel_size('');
    setPrice('');
    setId('');
    setDescription('');
  };

  const clearForm = () => {
    setName('');
    setType('');
    setColor('');
    setWheel_size('');
    setPrice('');
    setId('');
    setDescription('');
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        minLength="5"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={type}
        minLength="5"
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        value={color}
        minLength="5"
        placeholder="Color"
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="number"
        value={wheel_size}
        minLength="5"
        placeholder="Wheel size"
        onChange={(e) => setWheel_size(e.target.value)}
      />
      <input
        type="number"
        value={price}
        minLength="5"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        value={id}
        minLength="5"
        placeholder="ID(slug) xxxxxxxxxxx"
        onChange={(e) => setId(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}></textarea>
      <button type="submit" onClick={saveBike}>
        Save
      </button>
      <button onClick={clearForm}>Clear</button>
    </form>
  );
};

export default Form;
