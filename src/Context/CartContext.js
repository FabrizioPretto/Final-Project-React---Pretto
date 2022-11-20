import { createContext, useContext } from "react";
import { useState } from "react";


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

    const getCartlength = () => {
        return cartContent.length;
    }

    const clearCart = () => {
        setCartContent([]);
    }

    const getQuantity = (item) => {

        if (getCartlength() > 0 && cartContent.includes(item)) {
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


    //Añadir SweetAlert

    const addItem = (objeto) => {

        if (isInCart(objeto.Id)) {
            console.log("El Producto ya se encuentra en el carro.");
        }
        else {
            let array = cartContent;
            array.push(objeto);
            setCartContent(array);
            showCart();
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

    return (<cartContext.Provider value={{ cartContent, addItem, isInCart, clearCart, getCartlength, getQuantity, removeItem, increaseCartItem, decreaseCartItem, totalCart, subtotalItem }}>
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