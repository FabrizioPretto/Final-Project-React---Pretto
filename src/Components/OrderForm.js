import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addDoc, writeBatch, collection, getFirestore, doc, getDoc } from 'firebase/firestore';
import { ActualCartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';



function OrderForm() {
    const [formData, setFormData] = useState({ Name: '', Surname: '', Email: '', Tel: '' })
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


        let cadena = "Compra realizada a nombre de: " + formData.Name + " " + formData.Surname + " por un total de $ " + total + ".";
        let cadena2 = "Nos contactaremos al correo electr??nico: " + formData.Email + " o al tel??fono " + formData.Tel;
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
                    <Form.Label>Tel??fono</Form.Label>
                    <Form.Control type="phone" name="Tel" placeholder="" required value={formData.Tel}
                        onChange={handleOnChange} />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un n??mero de tel??fono v??lido.
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

                        label="Mayor de 18 a??os"
                        feedback="Debes seleccionar la casilla"
                        feedbackType="invalid"
                    />
                </Form.Group>*/
/*
<Link to={`/item/${item.Id}`}>
    <Button variant="primary">Detalle</Button>
</Link>*/