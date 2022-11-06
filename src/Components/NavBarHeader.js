import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';
import Cart from './Cart';
import './NavBarHeader.css';

function NavBarHeader({ props }) {
  let id = 0;

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" ><LogoWidget /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={`/Category/${props[0]}`}>{props[0]}</Nav.Link>
          <Nav.Link href={`/Category/${props[1]}`}>{props[1]}</Nav.Link>
          <Nav.Link href={`/Category/${props[2]}`}>{props[2]}</Nav.Link>
          <Nav.Link href={`/Category/${props[3]}`}>{props[3]}</Nav.Link>
          <Nav.Link href={`/Category/${props[4]}`}>{props[4]}</Nav.Link>
          <Nav.Link href={`/Category/${props[5]}`}>{props[5]}</Nav.Link>
          <Nav.Link href={`/Category/${props[6]}`}>{props[6]}</Nav.Link>
          <Nav.Link href={`/Category/${props[7]}`}>{props[7]}</Nav.Link>
        </Nav>
        <Navbar.Brand href={`/Cart/${id}`} ><CartWidget /></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarHeader;

/*
<Nav.Link href={`/Category/${props[6].split(" ").join("")}`}>{props[6]}</Nav.Link>
<Nav.Link href={`/Category/${props[7].split(" ").join("")}`}>{props[7]}</Nav.Link>
*/