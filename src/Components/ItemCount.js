import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import hombreBebiendo from './Images/hombre-bebiendo.gif'

const ItemCount = ({ item }) => {

    const [cantidad, setCantidad] = useState(1);


    useEffect(() => { }, [cantidad]);

    function onAdd(beer) {


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




    return (
        <>
            <div>
                <ButtonGroup aria-label="Basic example" style={{ marginTop: '5px' }}>
                    <Button disabled={cantidad === 1 ? true : false} variant="primary" style={{ marginRight: '5px' }} onClick={() => setCantidad(cantidad - 1)}>-</Button>
                    <h3 id="contador" style={{ marginRight: '5px' }}>{cantidad}</h3>
                    <Button disabled={item.Stock === cantidad ? true : false} variant="primary" onClick={() => setCantidad(cantidad + 1)}>+</Button>
                </ButtonGroup>
            </div>
            <div>
                <Button variant="outline-primary" style={{ marginTop: '10px' }} onClick={() => onAdd(item)}>Agregar al carrito</Button>
            </div>
        </>
    );
}


export default ItemCount;

/*
<Link to={`/item/${item.Id}`}>
    <Button variant="primary">Detalle</Button>
</Link>

 <Route path="/cart/:nro" exact element={<Cart />}></Route>

<ItemCount item={item} />
*/
