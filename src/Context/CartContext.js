import { createContext, useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'


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
        if (found !== undefined)
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

    /*showClass: {
    popup: 'animate__animated animate__fadeInDown'
    }*/
    const clearCart = (option) => {
        setCartContent([]);
        let timerInterval;
        removeCartWidget();

        if (option === 1) {
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
        if (array[cartContent.indexOf(item)].Cantidad < array[cartContent.indexOf(item)].Stock) {
            value++;
            array[cartContent.indexOf(item)].Cantidad = value;
            setCartContent(array);
        }
        return value;
    }

    const decreaseCartItem = (item) => {
        let array = cartContent;
        let value = array[cartContent.indexOf(item)].Cantidad;
        if (array[cartContent.indexOf(item)].Cantidad > 1) {
            value--;
            array[cartContent.indexOf(item)].Cantidad = value;
            setCartContent(array);
        }
        return value;
    }

    const subtotalItem = (precio, cantidad) => {
        let subtotal = precio * cantidad;
        return subtotal;
    }

    const showCartWidget = () => {

        let cartWidgetDiv = document.getElementById("cartWidget");
        if (cartWidgetDiv.getAttribute("style") === "visibility: hidden;") {
            cartWidgetDiv.setAttribute('style', 'visibility: visible;');
        }
    }

    const removeCartWidget = () => {
        let cartWidgetDiv = document.getElementById("cartWidget");
        cartWidgetDiv.setAttribute('style', 'visibility: hidden;');
    }

    const setBadge = () => {
        let badgeValue = document.getElementById("badge");
        badgeValue.innerHTML = getCartLength();
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
            setCartContent(array);
            setBadge();
            showCartWidget();
            if (objeto.Cantidad === 1) {
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
        setBadge();
        if (getCartLength() === 0)
            removeCartWidget();
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
        return acu;
    }

    return (<cartContext.Provider value={{
        cartContent, addItem, isInCart, clearCart, getCartLength, getQuantity,
        removeItem, increaseCartItem, decreaseCartItem, totalCart, subtotalItem
    }}>
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