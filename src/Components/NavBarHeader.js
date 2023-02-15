import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';
import './NavBarHeader.css';
import { Link } from 'react-router-dom';

function NavBarHeader({ props }) {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand><LogoWidget /></Navbar.Brand>
        <Nav className="me-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <ul>
            <li><Link to={`/category/${props[0]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[0]}</Link></li>
            <li><Link to={`/category/${props[1]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[1]}</Link></li>
            <li><Link to={`/category/${props[2]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[2]}</Link></li>
            <li><Link to={`/category/${props[3]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[3]}</Link></li>
            <li><Link to={`/category/${props[4]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[4]}</Link></li>
            <li><Link to={`/category/${props[5]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[5]}</Link></li>
            <li><Link to={`/category/${props[6]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[6]}</Link></li>
            <li><Link to={`/category/${props[7]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[7]}</Link></li>
            <li><Link to={`/category/${props[8]}`} style={{ textDecoration: 'none', color: 'black' }}> {props[8]}</Link></li>
          </ul>
        </Nav>
        <Navbar.Brand><CartWidget /></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarHeader;

/*
display: 'flex', flexDirection: 'row',

<CartWidget/>
*/

//<Button disabled={item.Stock === cantidad ? true : false}

//style={{ visibility: 'collapse' }}