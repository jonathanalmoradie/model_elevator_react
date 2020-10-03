import React, { useEffect } from 'react';

const ElevatorComponent = ({floor}) => {

  useEffect(() => {
    const lift = document.querySelector('.lift')
    switch (floor) {
      case '12':
        lift.style.bottom = `728px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '11':
        lift.style.bottom = `672px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '10':
        lift.style.bottom = `616px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '9':
        lift.style.bottom = `560px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '8':
        lift.style.bottom = `504px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '7':
        lift.style.bottom = `448px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '6':
        lift.style.bottom = `392px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '5':
        lift.style.bottom = `336px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '4':
        lift.style.bottom = `280px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '3':
        lift.style.bottom = `224px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '2':
        lift.style.bottom = `168px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case '1':
        lift.style.bottom = `112px`;
        setTimeout(() => {alert(`You have reached floor ${floor}. Enjoy your day!`)}, 3000) 
        break
      case 'L':
        lift.style.bottom = `56px`;
        setTimeout(() => {alert(`You have reached the lobby. Enjoy your day!`)}, 3000) 
        break
      default:
        lift.style.bottom = `56px`;
    }
  }, [floor])  

  return (
    <div id="box">
      <div className="lift">
        {floor}
      </div>
    </div>
  );
};

export default ElevatorComponent;