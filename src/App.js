import './App.css';

import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import localforage from 'localforage';

function App() {
  const [bike, setBike] = useState([]);

  useEffect(() => {
    localforage.keys().then((res) => {
      const promises = [];
      res.forEach((key) => promises.push(localforage.getItem(key)));
      Promise.all(promises).then((result) => setBike(result));
    });
  }, []);

  // console.log(
  //   localforage.keys().then((res) => {
  //     const promises = [];
  //     res.forEach((key) => promises.push(localforage.getItem(key)));
  //     Promise.all(promises).then((result) => console.log(result));
  //   }),
  // );

  const addBike = (task) => {
    localforage.setItem(task.id, task).then((value) => setBike([value, ...bike]));
  };

  const deleteBike = (id) => {
    localforage.removeItem(id).then(setBike(bike.filter((c) => c.id !== id)));
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="half_main">
          {bike.length > 0 ? (
            bike.map((item) => <Cart key={item.id} item={item} onDelete={deleteBike} />)
          ) : (
            <></>
          )}
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
