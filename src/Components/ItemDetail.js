import React from 'react'
import ItemCount from './ItemCount';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '500px', height: '750px', margin: '50px', backgroundColor: '#f8f9fa' }}>
                    <Link to={`/`}>
                        <CloseButton style={{ marginLeft: '470px' }} />
                    </Link>
                    <br />
                    <Image src={item.Imagen} roundedCircle thumbnail style={{ width: '275px', height: '250px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Card.Body>
                        <Card.Title>{item.Nombre}</Card.Title>
                        <Card.Text>{item.Descripción}</Card.Text>
                        <Card.Title>Precio: ${item.Precio}</Card.Title>
                        <Card.Title>ABV: {item.Abv}</Card.Title>
                        <Card.Title>Stock: {item.Stock}</Card.Title>
                        <ItemCount item={item} />
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default ItemDetail;

