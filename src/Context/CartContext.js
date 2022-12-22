import { createContext, useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';


const cartContext = createContext([]);

export const ActualCartContext = () => useContext(cartContext);

export default function CartProvider({ children }) {

    const [cartContent, setCartContent] = useState([]);

    function showCart() {
        console.log("ShowCart:");
        cartContent.map(item => (console.log(item)));
    }

    function isInCart(id) {
        let found = cartContent.find(beer => (beer.Id === id))
        if (found != undefined)
            return true;
        else
            return false;
    }

    const getIndex = (item) => {
        if (isInCart(item))
            return cartContent.indexOf(item);
    }


    const getCartLength = () => {
        return cartContent.length;
    }

    const clearCart = () => {
        setCartContent([]);
        let timerInterval

        Swal.fire({
            title: 'Se vació el carrito',
            html: 'Regresando al inicio en <b></b> milisegundos.',
            timer: 2000,
            confirmButtonText: '<a href="/">Genial!</a>',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    const getQuantity = (item) => {

        if (getCartLength() > 0 && cartContent.includes(item)) {
            let beerArray = cartContent;
            return beerArray[cartContent.indexOf(item)].Cantidad;
        }
        else
            return 1;
    }

    const increaseCartItem = (item) => {
        let array = cartContent;
        let value = array[cartContent.indexOf(item)].Cantidad;
        value++;
        array[cartContent.indexOf(item)].Cantidad = value;
        console.log(array[cartContent.indexOf(item)].Cantidad);
        setCartContent(array);

    }

    const decreaseCartItem = (item) => {
        let array = cartContent;
        let value = array[cartContent.indexOf(item)].Cantidad;
        value--;
        array[cartContent.indexOf(item)].Cantidad = value;
        console.log(array[cartContent.indexOf(item)].Cantidad);
        setCartContent(array);
    }

    const subtotalItem = (precio, cantidad) => {
        let subtotal = precio * cantidad;
        return subtotal;
    }


    const addItem = (objeto) => {

        if (isInCart(objeto.Id)) {
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos...',
                text: 'El producto ya se encuentra en el carrito'
            })
        }
        else {
            let array = cartContent;
            array.push(objeto);
            console.log(objeto);
            setCartContent(array);
            getCartLength();
            if (objeto.Cantidad == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Agregaste ' + objeto.Cantidad + ' unidad de \n' + objeto.Nombre + ' al carrito',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Agregaste ' + objeto.Cantidad + ' unidades de \n' + objeto.Nombre + ' al carrito',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }
    }

    const removeItem = (item) => {
        let array = cartContent;
        array.splice(getIndex(item), 1);
        setCartContent(array);
    }

    /* {
         items.map(item =>
         (
             <div className="col-md-3" key={item.Id} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                 <Item item={item} />
             </div>
         )
         )
     }*/

    const totalCart = () => {
        let acu = 0;
        cartContent.map(item => (acu = acu + item.Precio * item.Cantidad));
        console.log(acu);
        return acu;
    }

    return (<cartContext.Provider value={{ cartContent, addItem, isInCart, clearCart, getCartLength, getQuantity, removeItem, increaseCartItem, decreaseCartItem, totalCart, subtotalItem }}>
        {children}
    </cartContext.Provider>)
}


//export const darkModeContext = createContext(true);

/* Métodos Recomendados:
//Al clickear en ItemDetail se debe guardar en CartContext el producto y su cantidad en forma de objeto {name, price, quantity} dentro del array de productos agregados.
//No aceptar duplicados y mantener la consistencia.
addItem(item, price, quantity);
removeItem(id);
clear();
isInCart(id);

*/