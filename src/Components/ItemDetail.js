import React from 'react'
/*import ItemCount from './ItemCount';*/
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useState } from 'react';





const ItemDetail = ({ item }) => {


    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '500px', height: '600px', margin: '100px', backgroundColor: '#f8f9fa' }}>
                    <br />
                    <Image src={item.Imagen} roundedCircle thumbnail style={{ width: '275px', height: '250px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Card.Body>
                        <Card.Title>{item.Nombre}</Card.Title>
                        <Card.Text>{item.Descripción}</Card.Text>
                        <Card.Title>Precio: ${item.Precio}</Card.Title>
                        <Card.Title>ABV: {item.ABV}</Card.Title>
                        <Card.Title>Stock: {item.Stock}</Card.Title>
                        <br />
                        <button className="btn btn-outline-primary btn-block">Agregar al carrito</button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ItemDetail;

