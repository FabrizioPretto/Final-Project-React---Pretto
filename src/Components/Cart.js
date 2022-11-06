
import cart from './Images/cart.png'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    let { nro } = useParams();


    let beerList = [];

    for (let i = 0; i < localStorage.length; i++) {

        if (JSON.parse(localStorage.getItem(i)) != null) {
            let beer = JSON.parse(localStorage.getItem(i));
            beerList.push(beer);
        }
    }

    console.log(beerList);
    return (
        <>
            <h2>N° de Orden: {nro}</h2>
            <div className="container d-flex justify-content-center aling-items-center h-180" >
                <div className="row" >
                    {beerList.map(item =>
                    (
                        <div className="col-md-3" key={item.Id} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Card id={item.Id} style={{ width: '275px', height: '450px', border: '2px solid #000' }}>
                                <Card.Img variant="top" src={item.Imagen} style={{ width: '271px', height: '250px' }} />
                                <Card.Body>
                                    <Card.Title>{item.Nombre}</Card.Title>
                                    <Card.Title>{item.Brewery}</Card.Title>
                                    <Card.Title>Unidades: {item.Quantity}</Card.Title>
                                    <Card.Title>Total: {(item.Quantity * item.Precio)}</Card.Title>
                                    <Link to={`/item/${item.Id}`}>
                                        <Button variant="primary">Quitar</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <img alt="cart_image" href="/" src={cart} />
        </>
    );
}

export default Cart;

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
 <h3>Cerveza: {item.nombre}</h3>
            <h4>Cantidad: {quantity}</h4>
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