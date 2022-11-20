
import cart from './Images/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { ActualCartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const CartWidget = () => {

    const { getCartlength } = ActualCartContext();

    const [cartItems, setCartItems] = useState(getCartlength())



    useEffect(() => {
        setCartItems(getCartlength())
    }, [cartItems]);


    return (
        <>
            <Link to={`/cart`}>
                <img alt="cart_image" src={cart} style={{ margin: '0px 30px 0px 0px' }} />
                {/* <Badge bg="success">{cartItems}</Badge> */}
            </Link>



        </>
    );
}

export default CartWidget;

/*
<Link to={`/item/${item.Id}`}></Link>
*/

