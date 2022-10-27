import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


function NavBarHeader(props) {



  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" ><LogoWidget /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="me-auto">
          <Nav.Link href={`/Category/${props.brewery[0]}`}>{props.brewery[0]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[1]}`}>{props.brewery[1]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[2]}`}>{props.brewery[2]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[3]}`}>{props.brewery[3]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[4]}`}>{props.brewery[4]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[5]}`}>{props.brewery[5]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[6]}`}>{props.brewery[6]}</Nav.Link>
          <Nav.Link href={`/Category/${props.brewery[7]}`}>{props.brewery[7]}</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}


export default NavBarHeader;

