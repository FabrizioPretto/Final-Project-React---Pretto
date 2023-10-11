import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {

    function handleHoverOn(e) {
        e.target.style.fontSize = '25px';
    }

    function handleHoverOut(e) {
        e.target.style.fontSize = '20px';
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="black" bg="black">
            <Container>
                <Navbar.Collapse style={{
                    justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto',
                    fontSize: '20px', height: '150px', color: 'white'
                }}>
                    <Nav.Link onMouseOver={handleHoverOn} onMouseOut={handleHoverOut}>Sobre Nosotros</Nav.Link>
                    <Nav.Link onMouseOver={handleHoverOn} onMouseOut={handleHoverOut}>Volver al inicio</Nav.Link>
                    <Nav.Link onMouseOver={handleHoverOn} onMouseOut={handleHoverOut} style={{ marginRight: '30px' }}>Contacto</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;

