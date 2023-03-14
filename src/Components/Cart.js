import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import binIcon from './Images/bin.jpg';
import { ActualCartContext } from '../Context/CartContext';
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";
import { useState, useEffect, createElement } from 'react';
import './Cart.css'
import OrderForm from './OrderForm';
import React from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const Cart = () => {
    //let { nro } = useParams();

    const { cartContent, clearCart, getCartLength, removeItem, subtotalItem, increaseCartItem, decreaseCartItem } = ActualCartContext();
    const [cartItems, setCartItems] = useState(getCartLength());
    //const [subtotalItem, setSubtotalItem] = useState();
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => { }, [cantidad]);
    useEffect(() => { }, [cartItems]);
    //useEffect(() => { }, [subtotalItem]);

    /*useEffect(() => {
        const db = getFirestore();

        filtrado = query(collection(db, "Beers"), where("Brewery", "==", brewery))
        getDocs(filtrado).then((snapshot) => {
            setfilterItems(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
    }, [brewery]);*/


    function updateCartTotal() {
        let total = 0;
        cartContent.map(item => (
            total = total + (item.Precio * item.Cantidad)
        ));
        return total;
    }

    function removeCartItem(item) {
        removeItem(item);
        setCartItems(getCartLength());
        updateCartTotal();
    }


    function setSubtotalRow(price, quantity, idProduct) {
        let counterValue = document.getElementById(`subtotalRow${idProduct}`);
        counterValue.innerHTML = "$ " + subtotalItem(price, quantity);
    }

    function setQuantity(price, value, idProduct) {
        let counterValue = document.getElementById(`contador${idProduct}`);
        counterValue.innerHTML = value;
        setSubtotalRow(price, value, idProduct);
        setCartTotal();
    }


    function setCartTotal() {
        let actualTotal = document.getElementById("total");
        actualTotal.innerHTML = "Total: $ " + updateCartTotal();
    }

    function showOrderForm() {
        let orderFormDiv = document.getElementById("orderForm")
        //let orderFormDiv = React.createElement(`<div>${<OrderForm />}</div>`);
        //container.append(orderFormDiv)
        orderFormDiv.setAttribute('style', 'collapse');
        //container.appendChild(orderFormDiv);
    }

    function hideShowForm() {
        let orderFormDiv = document.getElementById("orderForm");
        orderFormDiv.setAttribute('style', 'none');
    }


    function drawCart() {
        return (
            cartContent.map(item =>
            (
                <tr key={item.Id} id={`${item.Id}`}>
                    <td><Image src={item.Imagen} roundedCircle thumbnail style={{ width: '125px', height: '100px', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} /></td>
                    <td>{item.Nombre}</td>
                    <td>$ {item.Precio}</td>
                    {/* <td>{item.Cantidad}</td> */}
                    <td><div>
                        <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                            <Button disabled={item.Cantidad === 1 ? true : false} variant="primary" style={{ marginRight: '5px' }} onClick={() => setQuantity(item.Precio, decreaseCartItem(item), item.Id)}>-</Button>
                            <h3 id={`contador${item.Id}`} style={{ marginRight: '5px' }}>{item.Cantidad}</h3>
                            <Button disabled={item.Stock === item.Cantidad ? true : false} variant="primary" onClick={() => setQuantity(item.Precio, increaseCartItem(item), item.Id)}>+</Button>
                        </ButtonGroup>
                    </div></td>
                    <td id={`subtotalRow${item.Id}`}>$ {subtotalItem(item.Precio, item.Cantidad)}</td>
                    <td><Image variant="outline-light"
                        onClick={() => { removeCartItem(item) }}
                        src={binIcon}
                        style={{ width: '49px', height: '67px', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                    </td>
                </tr>
            ))

        )
    }

    if (cartItems > 0) {

        return (<>
            <div id='cartContainer' style={{ width: '1600px', display: 'flex', flexWrap: 'wrap', alignContent: 'space-around', alignItems: 'baseline', marginLeft: 'auto', marginRight: 'auto' }}>
                <Table striped bordered hover size="sm" id='CartTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drawCart()}
                    </tbody>
                </Table>

                <Card id='CartCard'>
                    <Card.Header as="h5">RESUMEN</Card.Header>
                    <Card.Body>
                        <Card.Title id='total'>Total: $ {updateCartTotal()}</Card.Title>
                        <Button onClick={() => showOrderForm()} variant="success">Realizar Compra</Button>
                        <Link to={`/`}>
                            <Button variant="warning" style={{ marginLeft: '7px', marginTop: '10px' }} onClick={() => { clearCart(1) }}>Vaciar Carrito</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <div id="orderForm"><OrderForm /></div>
            </div>
        </>
        );//style={{ visibility: 'collapse', border: 'solid', backgroundColor: 'red' }} 
    }
    else {
        return (<Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px' }}>
            <Card.Body>
                <Card.Title>Ooops...</Card.Title>
                <Card.Text>
                    No existen artículos en el carrito
                </Card.Text>
                <Link to={`/`}>
                    <Button variant="primary">Seguir Comprando</Button>
                </Link>
            </Card.Body>
        </Card>);
    }

}

export default Cart;

/*
{cartContent.map(item =>
                        (
                            <tr key={item.Id}>
                                <td><Image src={item.Imagen} roundedCircle thumbnail style={{ width: '125px', height: '100px', marginLeft: '30px', marginRight: 'auto' }} /></td>
                                <td>{item.Nombre}</td>
                                <td>$ {item.Precio}</td>
                                <td><ItemCount item={item} /></td>
                                <td>$ {subtotalItem(item.Precio, item.Cantidad)}</td>
                                <td><Image variant="outline-light" onClick={() => { removeCartItem(item) }} src={binIcon} style={{ width: '49px', height: '67px', marginLeft: '20px', marginRight: 'auto', marginTop: '25px' }} /></td>
                            </tr >
                        ))}
*/







//<Link to={`/`}> </Link>
//import writeBatch from "firebase/firestore"


/*
<ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                                        <Button disabled={item.Cantidad === 1 ? true : false} variant="dark" style={{ marginRight: '5px' }} >-</Button>
                                        <h3 id="contador" style={{ marginRight: '5px' }}>{item.Cantidad}</h3>
                                        <Button disabled={item.Stock === item.Cantidad ? true : false} onClick={() => console.log("+1")} variant="dark" >+</Button>
                                    </ButtonGroup>
                                    */

/* <Card.Title>Subtotal: $ {updateCartTotal()}</Card.Title> */


/*
<Card id={item.Id} style={{ width: '275px', height: '400px', border: '2px solid #000' }}>
                <Card.Img variant="top" src={item.Imagen} style={{ width: '271px', height: '250px' }} />
                <Card.Body>
                    <Card.Title>{item.Nombre}</Card.Title>
                    <Card.Title>{item.Brewery}</Card.Title>
                    <Link to={`/item/${item.Id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>

*/

/*           
//AGREGAR ITEM AL LS
function actualizarLS(arrayCarrito) {
    localStorage.setItem("carritoStorage", JSON.stringify(arrayCarrito));
}


//AGREGAR ITEM AL CARRITO DEL DOM
function agregarItemAlCarrito(idProd) {
    arrayCarrito = [];
    arrayCarrito = JSON.parse(localStorage.getItem("carritoStorage"));
    let productoASumar = arrayCarrito.find(producto => producto.id == idProd);

    if (arrayCarrito.length > 0) {


        if (productoASumar == undefined) {
            arrayCarrito.push(productosJSON[idProd - 1]);
            arrayCarrito[arrayCarrito.length - 1].cantidad++;
        }
        else {
            let posicionEnCarrito = arrayCarrito.findIndex(p => p.id === idProd);
            arrayCarrito[posicionEnCarrito].cantidad++;
            console.log("entr{o en 2");
        }
    }
    else {
        arrayCarrito.push(productosJSON[idProd - 1]);
        console.log("antes de sumarle tiene: " + arrayCarrito[arrayCarrito.length - 1].cantidad);
        arrayCarrito[arrayCarrito.length - 1].cantidad++;
    }
    actualizarLS(arrayCarrito);
}
*/


/*


    if (getCartlength() > 0) {
        return (
            <div id='cartContainer'>
                <Table striped bordered hover size="sm" id='CartTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartContent.map(item =>
                        (
                            <tr key={item.Id}>
                                <td><Image src={item.Imagen} roundedCircle thumbnail style={{ width: '125px', height: '100px', marginLeft: '30px', marginRight: 'auto' }} /></td>
                                <td>{item.Nombre}</td>
                                <td>$ {item.Precio}</td>
                                <td>
                                    <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                                        <Button disabled={item.Cantidad === 1 ? true : false} variant="dark" style={{ marginRight: '5px' }} >-</Button>
                                        <h3 id="contador" style={{ marginRight: '5px' }}>{item.Cantidad}</h3>
                                        <Button disabled={item.Stock === item.Cantidad ? true : false} variant="dark" >+</Button>
                                    </ButtonGroup>
                                </td>
                                <td>$ {item.Cantidad * item.Precio}</td>
                                <td><Image variant="outline-light" onClick={() => { removeItem(item) }} src={binIcon} style={{ width: '49px', height: '67px', marginLeft: '20px', marginRight: 'auto', marginTop: '25px' }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Card id='CartCard'>
                    <Card.Header as="h5">RESUMEN</Card.Header>
                    <Card.Body>
                        <Card.Title>Subtotal: $ {updateCartTotal()}</Card.Title>
                        <Button variant="success">FINALIZAR COMPRA</Button>
                        <Button variant="warning" style={{ marginTop: '10px' }} onClick={() => clearCart()}>Vaciar Carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    else {
        return (<Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px' }}>
            <Card.Body>
                <Card.Title>Ooops...</Card.Title>
                <Card.Text>
                    No existen artículos en el carrito
                </Card.Text>
                <Link to={`/`}>
                    <Button variant="primary">Seguir Comprando</Button>
                </Link>
            </Card.Body>
        </Card>);
    }

    */

/*Rendering Condicional
import React from 'react';
import './style.css';
import Spinner from 'react-bootstrap/Spinner';

function Loader({ loading }) {
return (
<>
  {loading ? (
     <>
    <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </>
  ) : (
    ''
  )}
</>
);
}

export default function App() {
return (
<div>
  <Loader loading={true} />
</div>
);
}


*/