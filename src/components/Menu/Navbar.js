
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const Navbar = () => {
  return (
    <div className='container'>
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div>
    </div>
  )
}

export default Navbar