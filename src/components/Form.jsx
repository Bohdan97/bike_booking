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
    if (
      name.length > 5 &&
      type.length > 5 &&
      color.length > 5 &&
      wheel_size.length > 1 &&
      price.length > 1 &&
      id.length > 1 &&
      description.length > 5
    ) {
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
    } else {
      alert('Fill in all fild!');
    }
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
        required
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={type}
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        value={color}
        placeholder="Color"
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="number"
        value={wheel_size}
        placeholder="Wheel size"
        onChange={(e) => setWheel_size(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        value={id}
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
