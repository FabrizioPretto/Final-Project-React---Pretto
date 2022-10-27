import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';


function NavBarHeader() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" ><LogoWidget /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="Artículos">Artículos</Nav.Link>
          <Nav.Link href="Accesorios">Accesorios</Nav.Link>
          <Nav.Link href="Nosotros">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  );
}


export default NavBarHeader;
/*
<Link to={`/detalle/${item.Id}`}>
  <Button variant="primary">Detalle</Button>
</Link>
*/