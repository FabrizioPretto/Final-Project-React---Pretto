import cart from './Images/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
//import { ActualCartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
//import { useState, useEffect } from 'react';

const CartWidget = ({ cartLength }) => {

    //const { getCartLength } = ActualCartContext();

    // const [cartItems, setCartItems] = useState(getCartLength())


    /*
        useEffect(() => {
            // setCartItems(getCartLength())
        }, [cartItems]);
    
    */
    return (
        <>
            <Link to={`/cart`}>
                <img alt="cart_image" src={cart} style={{ marginRight: '20px' }}></img>
            </Link>
            {/* <Badge bg="outline-light">{cartLength}</Badge> */}
        </>
    );
}

export default CartWidget;

/*
<Link to={`/item/${item.Id}`}></Link>
style={{ margin: '0px 30px 0px 0px' }}
*/

/*  <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
*/