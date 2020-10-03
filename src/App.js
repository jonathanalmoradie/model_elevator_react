import React, { useState } from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import NavComponent from './components/NavComponent';
import liftFloors from './liftFloors'
import FloorsComponent from './components/FloorsComponent';
import ElevatorComponent from './components/ElevatorComponent';



function App() {
  const [floor, setFloor] = useState(null)

  const desiredFloor = e => {
    setFloor(e.target.value)
  }

  return (
    <div className="App">
      <NavComponent floor={floor} />

      <div id="breakpoint"></div>
      
      <div>
        {
          liftFloors.map((floor, index) => {
            return(
            <FloorsComponent key={index} />
            )
          })
        }
      </div>

      <ElevatorComponent floor={floor}/>

      <div className="container" id='buttons'>
        {
          liftFloors.map((lift, index) => {
            return (
              <Button className='btn-danger' onClick={desiredFloor} key={index} name={lift.name} value={lift.name}>
                {lift.name}
              </Button>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
