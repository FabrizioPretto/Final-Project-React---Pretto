import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import hombreBebiendo from './Images/hombre-bebiendo.gif'
import { ActualCartContext } from '../Context/CartContext';
import { updateCartTotal } from './Cart'


const ItemCount = ({ item }) => {

    let location = window.location.pathname;

    const { addItem, getQuantity, increaseCartItem, decreaseCartItem, subtotalItem } = ActualCartContext();

    const [cantidad, setCantidad] = useState(1);
    const [cartItemQuantity, setCartItemQuantity] = useState(getQuantity(item));

    useEffect(() => { }, [cantidad]);
    useEffect(() => { }, [cartItemQuantity]);


    function increaseItem(item) {
        setCartItemQuantity(cartItemQuantity + 1);
        increaseCartItem(item);
        subtotalItem(item.precio, cartItemQuantity);
    }

    function decreaseItem(item) {
        setCartItemQuantity(cartItemQuantity - 1);
        decreaseCartItem(item);
        subtotalItem(item.precio, cartItemQuantity);
    }

    return (

        location != "/cart"
            ?
            <>
                <div>
                    <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                        <Button disabled={cantidad === 1 ? true : false} variant="primary" style={{ marginRight: '5px' }} onClick={() => setCantidad(cantidad - 1)}>-</Button>
                        <h3 id="contador" style={{ marginRight: '5px' }}>{cantidad}</h3>
                        <Button disabled={item.Stock === cantidad ? true : false} variant="primary" onClick={() => setCantidad(cantidad + 1)}>+</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Button variant="outline-primary" style={{ marginTop: '10px' }}
                        onClick={() => { addItem({ "Id": item.Id, "Imagen": item.Image, "Nombre": item.Name, "Precio": item.Price, "Cantidad": cantidad, "Stock": item.Stock }) }}> Agregar al carrito</Button>
                </div>
            </>
            :
            <div>
                <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                    <Button disabled={cartItemQuantity === 1 ? true : false} variant="primary" style={{ marginRight: '5px' }} onClick={() => { decreaseItem(item) }}>-</Button>
                    <h3 id="contador" style={{ marginRight: '5px' }}>{cartItemQuantity}</h3>
                    <Button disabled={item.Stock === cartItemQuantity ? true : false} variant="primary" onClick={() => { increaseItem(item) }}>+</Button>

                </ButtonGroup>
                <p>Subtotal: {item.Precio * cartItemQuantity}</p>
            </div>

    );
}
/*
<Button id="goToCart" variant="primary" style={{ marginRight: '5px', marginTop: '10px', visibility: 'hidden' }} >Ir al Carrito</Button>
.style({ visibility: 'visible' })
*/
export default ItemCount;










/*
<>
            <div>
                <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                    <Button disabled={cantidad === 1 ? true : false} variant="primary" style={{ marginRight: '5px' }} onClick={() => setCantidad(cantidad - 1)}>-</Button>
                    <h3 id="contador" style={{ marginRight: '5px' }}>{cantidad}</h3>
                    <Button disabled={item.Stock === cantidad ? true : false} variant="primary" onClick={() => setCantidad(cantidad + 1)}>+</Button>
                </ButtonGroup>
            </div>
            {
                location != "/cart"
                    ?
                    < div >
                        <Button variant="outline-primary" style={{ marginTop: '10px' }}
                            onClick={() => { addItem({ "Id": item.Id, "Imagen": item.Image, "Nombre": item.Name, "Precio": item.Price, "Cantidad": cantidad }) }}> Agregar al carrito</Button>
                    </div>
                    : <></>


            }

        </>
        */
















/*
onClick={() => onAdd(item)}
addItem(item, cantidad)}
*/

/*
<Link to={`/item/${item.Id}`}>
    <Button variant="primary">Detalle</Button>
</Link>

 <Route path="/cart/:nro" exact element={<Cart />}></Route>

<ItemCount item={item} />
*/

/*
   function onAdd(beer) {

       //localStorage.clear();

       let success = saveLocalStorage(beer);

       if (success == true)
           Swal.fire({
               title: beer.Nombre,
               text: 'Se agregó al Carrito',
               confirmButtonText: '¡Genial!',
               icon: 'success',
               width: 400,
               padding: '3em',
               color: 'black',
               backdrop: `RGB(102 153 0)
                       url(${hombreBebiendo})
                       left top
                       no-repeat
                       `
           })
       else
           Swal.fire({
               icon: 'error',
               title: 'Lo sentimos...',
               text: 'La cantidad seleccionada supera el stock disponible'
           })

   }

   function saveLocalStorage(beer) {

       if (localStorage.getItem(beer.Id)) {
           let newBeer = JSON.parse(localStorage.getItem(beer.Id));

           if ((newBeer.Quantity + cantidad) <= newBeer.Stock) {
               newBeer.Quantity = newBeer.Quantity + cantidad;
               localStorage.setItem(newBeer.Id, JSON.stringify(newBeer));
               return (true);
           }
           else
               return (false);
       }
       else {
           let beerString = JSON.stringify(beer);
           beerString = beerString.slice(0, beerString.length - 1).concat(`, "Quantity": ${cantidad}}`);
           let beerPlusQuantity = JSON.parse(beerString);
           localStorage.setItem(beerPlusQuantity.Id, JSON.stringify(beerPlusQuantity));
           return (true);
       }
   }
   */