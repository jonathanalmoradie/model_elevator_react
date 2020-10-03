import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const NavComponent = ({floor}) => {
  return (
    <div className="container">
      <Navbar bg='transparent'>
        <Navbar.Brand style={{color: '#fff'}}>Floor Selected: {floor}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color: '#fff'}}>
            By: Jonathan Almoradie
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;