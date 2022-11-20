import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import LogoWidget from './LogoWidget';
import Cart from './Cart';
import './NavBarHeader.css';
import { Link } from 'react-router-dom';

function NavBarHeader({ props }) {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand><LogoWidget /></Navbar.Brand>
        <Nav className="me-auto" >
          <ul >
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
<Nav.Link href={`/Category/${props[6].split(" ").join("")}`}>{props[6]}</Nav.Link>
<Nav.Link href={`/Category/${props[7].split(" ").join("")}`}>{props[7]}</Nav.Link>
style={{ textDecoration: 'none', color: 'black' }}

  <Nav.Link href={`/category/${props[1]}`}>{props[1]}</Nav.Link>
          <Nav.Link href={`/category/${props[2]}`}>{props[2]}</Nav.Link>
          <Nav.Link href={`/category/${props[3]}`}>{props[3]}</Nav.Link>
          <Nav.Link href={`/category/${props[4]}`}>{props[4]}</Nav.Link>
          <Nav.Link href={`/category/${props[5]}`}>{props[5]}</Nav.Link>
          <Nav.Link href={`/category/${props[6]}`}>{props[6]}</Nav.Link>
          <Nav.Link href={`/category/${props[7]}`}>{props[7]}</Nav.Link>
*/

