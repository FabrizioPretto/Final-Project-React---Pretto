import React from 'react'
import ItemCount from './ItemCount';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '500px', height: '750px', margin: '50px', backgroundColor: '#f8f9fa' }}>
                    <Link to={`/`}>
                        <CloseButton style={{ marginLeft: '470px' }} />
                    </Link>
                    <br />
                    <Image src={item.Image} roundedCircle thumbnail style={{ width: '275px', height: '250px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Card.Body>
                        <Card.Title>{item.Name}</Card.Title>
                        <Card.Text>{item.Description}</Card.Text>
                        <Card.Title>Precio: ${item.Price}</Card.Title>
                        <Card.Title>ABV: {item.Abv}</Card.Title>
                        <Card.Title>Stock: {item.Stock}</Card.Title>
                        <ItemCount item={item} />
                        <Link to={`/cart`}>
                            <Button id="goToCart" variant="outline-primary" style={{ marginRight: 'auto', marginTop: '10px' }} >Ir al Carrito</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default ItemDetail;




