import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { addDoc, getDocs, collection, getFirestore } from 'firebase/firestore';
import { ActualCartContext } from '../Context/CartContext';
//import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function OrderForm() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ Name: '', Surname: '', Email: '', Tel: '' })
    const [idOrder, setIdOrder] = useState();

    const { cartContent, totalCart } = ActualCartContext();

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

    const createOrder = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");

        let order = {};

        order.buyer = formData;
        order.date = new Date()//firebase.firestore.Timestamp.fromDate(new Date());
        order.items = cartContent.map(cartItem => {
            const id = cartItem.Id;
            const title = cartItem.Nombre;
            const price = cartItem.Precio * cartItem.Cantidad;

            return { id, title, price };
        });

        let total = totalCart();
        order.total = total;


        addDoc(ordersCollection, order);


        let cadena = "Compra realizada a nombre de: " + formData.Name + " " + formData.Surname + " por un total de $ " + total + ".";
        let cadena2 = "Nos contactaremos al correo electrónico: " + formData.Email + " o al teléfono " + formData.Tel;
        return (Swal.fire({
            title: 'Compra finalizada!',
            confirmButtonText: 'Genial!',
            html: cadena + '\n\n' + cadena2,
            icon: 'success',
            width: 1800,
            height: 1000,
            padding: '3em',
            color: 'black',
            footer: '<a href={`/`}>Seguir Comprando</a>'

        })

        )

    }

    return (
        <Form id="CustomerInfo" onChange={handleOnChange} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Row style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group as={Col} md="4" controlId="validationNames">
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
                <Form.Group as={Col} md="3" controlId="validationSurname">
                    <Form.Label>Apellido</Form.Label>
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
                <Form.Group className="mb-3" as={Col} md="7" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="Email" placeholder="" value={formData.Email}
                        onChange={handleOnChange} />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
                <Form.Group as={Col} md="7" controlId="validationPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone" name="Tel" placeholder="Teléfono" required value={formData.Tel}
                        onChange={handleOnChange} />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un número de teléfono válido.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br></br>
            <Row style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>

                <Button style={{ width: '175px', marginLeft: '350px' }} onClick={() => createOrder()}  >Confirmar Compra</Button>

            </Row>

        </Form>

    );
}

export default OrderForm;

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
<Link to={`/item/${item.Id}`}>
    <Button variant="primary">Detalle</Button>
</Link>*/