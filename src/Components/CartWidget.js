
import cart from './Images/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <img alt="cart_image" href="/:cart" src={cart} style={{ margin: '0px 30px 0px 0px' }} />
    );
}

export default CartWidget;

