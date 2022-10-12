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


/*
<header>
            <div id="logo">
                <img src="logo2.jpg" alt="Cabañas Torres" title="Cabañas Torres">
                <audio src="naturaleza.mp3" preload="auto" controls></audio>
            </div>
            <nav class="botonera_menu">
                <ul class="menu">
                   <li><a href="galeria.html">Galeria</a></li>
                   <li><a href="servicios.html">Servicios</a>
                    <ul class="submenu">
                       <li><a href="excursiones.html">Excursiones</a>
                       <li><a href="eventos.html">Eventos</a>
                   </ul>
                   </li>
                   <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
        </header>
*/
