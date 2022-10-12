import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';

function NavBarHeader() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><LogoWidget/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Artículos</Nav.Link>
            <Nav.Link href="#features">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
  );
}


export default NavBarHeader;

