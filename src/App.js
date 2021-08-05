import './App.css';

import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [bike, setBike] = useState([
    {
      name: 'vdd',
      type: 'sf',
      color: 'red',
      wheel_size: 26,
      price: 65,
      id: 5463463,
      description: 'gfdgvdfvd',
      status: true,
    },
    {
      name: 'vdd',
      type: 'sf',
      color: 'red',
      wheel_size: 26,
      price: 69,
      id: 54345564,
      description: 'gfdgvdfvd',
      status: true,
    },
  ]);

  const addBike = (task) => {
    const newBike = { ...task };
    setBike([...bike, newBike]);
  };

  const deleteBike = (id) => {
    setBike(bike.filter((c) => c.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="half_main">
          {bike.map((item) => (
            <Cart key={item.id} item={item} onDelete={deleteBike} />
          ))}
        </div>
        <div className="second_half">
          <Form onAdd={addBike} />
          <Statistics bike={bike} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
