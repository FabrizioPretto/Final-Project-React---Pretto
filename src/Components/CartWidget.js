import cart from './Images/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ }) => {
    return (
        <div id="cartWidget" style={{ visibility: 'hidden' }}>
            <Link to={`/cart`}>
                <img alt="cart_image" src={cart} style={{ marginRight: '20px' }}></img>
                <Badge id="badge" bg="primary"></Badge>
            </Link>
        </div>
    );
}

export default CartWidget;

//style={{ visibility: 'collapse' }}

/*
<Link to={`/item/${item.Id}`}></Link>
style={{ margin: '0px 30px 0px 0px' }}
*/

/*  <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            setShowCartWidget("collapse")
*/

/*
cartLength != 0
            ?
            <div style={{ visibility: 'collapse' }}>
                <Link to={`/cart`}>
                    <img alt="cart_image" src={cart} style={{ marginRight: '20px' }}></img>
                </Link>
                {/* <Badge bg="outline-light">{cartLength}</Badge> }
            </div >
            :

<div style={{ visibility: 'hidden' }}>
    <Link to={`/cart`}>
        <img alt="cart_image" src={cart} style={{ marginRight: '20px' }}></img>
    </Link>
    {/* <Badge bg="outline-light">{cartLength}</Badge> }
</div>

*/