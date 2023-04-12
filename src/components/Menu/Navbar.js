
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';




// const Navbar = () => {
//   return (
//     <div className='container'>
//     <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
//     <span class="caret"></span></button>
//     <ul class="dropdown-menu">
//       <li><a href="#">HTML</a></li>
//       <li><a href="#">CSS</a></li>
//       <li><a href="#">JavaScript</a></li>
//     </ul>
//   </div>
//     </div>
//   )
// }

// export default Navbar

// import Dropdown from 'react-bootstrap/Dropdown';

// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/Bisection">Bisection</Dropdown.Item>
//         <Dropdown.Item href="#/FalseMethod">FalseMethod</Dropdown.Item>
//         <Dropdown.Item href="#/Newton-raphson">Newton-raphson</Dropdown.Item>
//         <Dropdown.Item href="#/Taylor">Taylor</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//       <Navbar.Brand href="home">NUMERICAL METHODS</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">NUMERICAL METHODS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Roots of equation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
            <NavDropdown.Item href="/FalseMethod">False Position</NavDropdown.Item>
            <NavDropdown.Item href="/FalseMethod2">False Positionเฉพาะกิจ</NavDropdown.Item>
            <NavDropdown.Item href="/FalseMethod3">False Positionทำเพิ่ม</NavDropdown.Item>
            <NavDropdown.Item href="/Newton-raphson">Newton raphson</NavDropdown.Item>
            <NavDropdown.Item href="/Final">Finals</NavDropdown.Item>
            <NavDropdown.Item href="/Linear">Linear</NavDropdown.Item>
            
            
            <NavDropdown.Item href="/Taylor">Taylor_series </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Matrix" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Matrix_test">test</NavDropdown.Item>
            <NavDropdown.Item href="/Cramer">Cramer's Rule</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="tmp" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              <Nav.Link href="#link">Link</Nav.Link>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;