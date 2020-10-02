import React, { useState, useEffect } from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import NavComponent from './components/NavComponent';
import liftFloors from './liftFloors'

function App() {
  const [floor, setFloor] = useState('')

  const desiredFloor = e => {
    setFloor(e.target.value)
  }

  return (
    <div className="App">
      <NavComponent floor={floor} />
      <div className="container" id='buttons'>
        {
          liftFloors.map((lift, index) => {
            return (<Button className='btn-dark outline' onClick={desiredFloor} key={index} name={lift.name} value={lift.name}>{lift.name}</Button>)
          })
        }
      </div>

    </div>
  );
}

export default App;
