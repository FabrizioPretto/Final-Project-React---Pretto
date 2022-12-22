import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div>
            <br />

            <Card id={item.Id} style={{ width: '275px', height: '400px', border: '2px solid #000' }}>
                {/* <Badge style={{ textAlign: 'left', width: '40px' }} pill="false" bg="dark">${item.Price}</Badge> */}
                <Card.Img variant="top" src={item.Image} style={{ width: '271px', height: '250px' }} />
                <Card.Body>
                    <Card.Title>{item.Name}</Card.Title>
                    <Card.Title>{item.Brewery}</Card.Title>
                    <Link to={`/item/${item.Id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;
