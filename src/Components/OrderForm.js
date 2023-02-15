import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addDoc, writeBatch, collection, getFirestore, doc, getDoc } from 'firebase/firestore';
import { ActualCartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';
import CheckOut from './CheckOut';
import { Link } from 'react-router-dom';



function OrderForm() {
    const [formData, setFormData] = useState({ Name: '', Surname: '', Email: '', Tel: '' })
    const { cartContent, totalCart, clearCart } = ActualCartContext();
    const [orderDate, setOrderDate] = useState(new Date());

    /*
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(form)
    };*/

    function handleOnChange(e) {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    /*
    function validateData()
    {
        return true;
    }
    */

    function createOrder() {

        const db = getFirestore();

        const ordersCollection = collection(db, "Orders");

        let order = {};

        order.buyer = formData;
        //order.date = new Date();//firebase.firestore.Timestamp.fromDate(new Date());
        order.date = orderDate;
        order.items = cartContent.map(cartItem => {
            const id = cartItem.Id;
            const title = cartItem.Nombre;
            const price = cartItem.Precio * cartItem.Cantidad;

            return { id, title, price };
        });

        let total = totalCart();
        order.total = total;

        addDoc(ordersCollection, order);
        let beer;
        let newStock;

        cartContent.map(item => {
            const batch = writeBatch(db);
            let eachItem = doc(db, "Beers", `${item.Id}`);
            getDoc(eachItem).then((snapshot) => {
                beer = snapshot.data();
                newStock = beer.Stock - item.Cantidad
                batch.update(eachItem, { Stock: newStock })
                batch.commit();
            })
        })

        // <Link to = {`/checkout/${orderDate}`}></Link>

        clearCart(2);


        //VACIAR BADGE
        //VACIAR CARRITO


        /*
        let cadena = "Compra realizada a nombre de: " + formData.Name + " " + formData.Surname + " por un total de $ " + total + ".";
        let cadena2 = "Nos contactaremos al correo electrónico: " + formData.Email + " o al teléfono " + formData.Tel;
        return (Swal.fire({
            title: 'Compra finalizada!',
            confirmButtonText: '<a href="/">Genial!</a>',
            html: cadena + '\n\n' + cadena2,
            icon: 'success',
            width: 1800,
            padding: '3em',
            color: 'black',
            footer: '<a href="/checkout/${order.Id}">Seguir Comprando</a>',
            footer: '<a href="/">Seguir Comprando</a>'
        })

        )*/

    }

    return (
        // <Card style={{ marginLeft: '25px', marginRight: 'auto' }}>
        <Form id="CustomerInfo" onChange={handleOnChange} style={{ textAlign: 'center', marginTop: '15px', marginRight: 'auto', marginLeft: '15px', borderStyle: 'none' }}>
            <Row style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group as={Col} md="5" controlId="validationNames">
                    <Form.Label>Nombres</Form.Label>
                    {/* <Form.Control type="text" placeholder="Ingrese el Nombre" name="name" value={formData.name} onChange={handleOnChange} /> */}
                    <Form.Control
                        name="Name"
                        type="text"
                        placeholder=""
                        value={formData.Name}
                        onChange={handleOnChange}
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationSurname">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                        name="Surname"
                        type="text"
                        placeholder=""
                        value={formData.Surname}
                        onChange={handleOnChange}
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>

                </Form.Group>
            </Row>
            <br></br>
            <Row style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group className="mb-3" as={Col} md="10" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="Email" placeholder="" value={formData.Email}
                        onChange={handleOnChange} />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group as={Col} md="10" controlId="validationPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone" name="Tel" placeholder="" required value={formData.Tel}
                        onChange={handleOnChange} />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un número de teléfono válido.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br></br>
            <Row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
                {/* <Link to={`/ item / ${ item.Id } `}> */}
                {/* "/checkout/:order" */}
                {/* {/* <Link to={`/checkout/${orderDate}`}> */}
                <Link to={`/checkout`}>
                    <Button style={{ width: '200px', marginLeft: '90px', marginRight: 'auto' }} onClick={() => createOrder()}>Confirmar Compra</Button>
                </Link>
            </Row>
        </Form>
        //</Card >
    );
}
//Route path = "/checkout/:order"
export default OrderForm;

//
//style from row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}

//type = "submit"

/*
            <Row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group as={Col} md="2" controlId="validationLegal" name="Adult" onChange={handleOnChange}>
                    <Form.Check

                        label="Mayor de 18 años"
                        feedback="Debes seleccionar la casilla"
                        feedbackType="invalid"
                    />
                </Form.Group>*/
/*
<Link to={`/ item / ${ item.Id } `}>
    <Button variant="primary">Detalle</Button>
</Link>*/