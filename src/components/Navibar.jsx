import {NavDropdown,Container,Nav,Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import communicate from '../assets/communicate.png';

export const Navibar =() =>{
  const linkStyle = {
    fontSize: '18px', // Increase the font size
    fontWeight: 'bold', // Make the text bold
    // Add any other styles you need for the Nav.Link
  };

  const cvLink = 'https://drive.google.com/file/d/1Zg411YHg2e0FtyLoOIFpjmnDYO0bGcET/view?usp=drive_link';
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
      <Navbar.Brand as={NavLink} to="/Contact" style={linkStyle}>
        <img
          alt="Logo"
          src={communicate} 
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' Contact Me '}
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/Home" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Skills" style={linkStyle}>
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" style={linkStyle}>
              About
            </Nav.Link>
            <Nav.Link href={cvLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Resume
            </Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown" style={linkStyle}>
              <NavDropdown.Item as={NavLink} to="/Zerli" style={linkStyle}>
                Zerli Client-Server app
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Crypt" style={linkStyle}>
                Encryption and decoding project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Minesweeper" style={linkStyle}>
                Minesweeper game
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Os" style={linkStyle}>
              Linux Operating System Project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/RestManag" style={linkStyle}>
              Restaurant Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Portfolio" style={linkStyle}>
              My Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};