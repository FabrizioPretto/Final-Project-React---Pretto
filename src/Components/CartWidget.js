import cart from './Images/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { ActualCartContext } from '../Context/CartContext';
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';

//Método Autofocus: boolean.
//ARCHIVO README - Probar desde una computadora externa los comandos de cd e install.
//Ajustes y estética de cards de productos.
//Puntos de Scroll.
//BUILD Y NETLIFY.

const CartWidget = ({ }) => {
    const { cartContent, subtotalItem, totalCart } = ActualCartContext();
    const [show, setShow] = useState(false);
    let location = window.location.pathname;

    const handleClose = () => { location = window.location.pathname; setShow(false) };
    const handleShow = () => {
        location = window.location.pathname;
        location != "/cart" ? setShow(true) : setShow(false);
    }

    return (
        <div id="cartWidget" style={{ visibility: 'visible', display: 'inline-block', position: 'relative' }} >
            <Link to={`/cart`}>
                <img alt="cart_image" src={cart} style={{ marginRight: '20px', width: '40px', height: '40px', display: 'block' }}></img>
            </Link>
            <Badge id="badge" bg="primary" pill onMouseOver={handleShow} onMouseOut={handleClose}
                style={{
                    right: '10px', top: '-5px', lineHeight: '12px', position: 'absolute', textAlign: 'center', width: '25px', height: '25px',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'
                }} >
                {<Offcanvas show={show}
                    onHide={handleClose}
                    placement='end'
                    style={{ width: '500px', textAlign: 'center' }}>
                    <Offcanvas.Header >
                        <Offcanvas.Title style={{ marginLeft: 'auto', marginRight: 'auto' }}>Vista Previa del Carrito</Offcanvas.Title>
                        <CloseButton onClick={handleClose} />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
                                {cartContent.map(item =>
                                (
                                    <tr key={item.Id} id={`${item.Id}`}>
                                        <td><Image src={item.Imagen} roundedCircle thumbnail style={{ width: '62,5px', height: '50px' }} /></td>
                                        <td>{item.Nombre}</td>
                                        <td>$ {item.Precio}</td>
                                        <td>{item.Cantidad}</td>
                                        <td id={`subtotalRow${item.Id}`}>$ {subtotalItem(item.Precio, item.Cantidad)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Offcanvas.Title style={{ marginTop: '20px' }}>Total: ${totalCart()}</Offcanvas.Title>
                        <Link to={`/cart`}>
                            <Button id="goToCart" variant="outline-primary" style={{ marginTop: '20px' }}>Ir al Carrito</Button>
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>}
            </Badge>

        </div>
    );
}

export default CartWidget;
