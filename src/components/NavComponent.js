import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const NavComponent = ({floor}) => {
  return (
    <div className="container">
      <Navbar className="justify-content-end">
        <Navbar.Brand>Floor Level: {floor}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            By: Jonathan Almoradie
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;