import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addDoc, writeBatch, collection, getFirestore, doc, getDoc } from 'firebase/firestore';
import { ActualCartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ Name: '', Surname: '', Email: '', Tel: '' })
    const [orderDate, setOrderDate] = useState(new Date());
    //const [focus, setFocus] = useState(formData.Name);
    const { cartContent, totalCart, clearCart } = ActualCartContext();

    const navigate = useNavigate();
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    /* useEffect(() => {
         console.log(focus);
     }, [focus]);*/

    useEffect(() => {
        if (validated === true) {
            createOrder();
        }
    }, [validated]);

    useEffect(() => {
        if (submitted === true) {
            navigate(`/checkout`);
            clearCart();
        }
    }, [submitted]);


    const handleSubmit = (event) => {
        if (validated === false) {
            event.preventDefault();
            event.stopPropagation();
            validateFields();
        }
    };

    function validateFields() {
        if (formData.Name.length < 3) {
            //setFocus(formData.Name);
            setValidated(false);
        }
        else {
            if (formData.Surname.length < 3) {
                //formData.Surname;
                setValidated(false);
            }
            else {
                if (!expresion.test(formData.Email)) {
                    //setFocus(formData.Email);
                    setValidated(false);
                }
                else {
                    if (formData.Tel.length < 10) {
                        //setFocus(formData.Tel);
                        setValidated(false);
                    }
                    else {
                        setValidated(true);
                    }
                }
            }
        }
    }


    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

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
        setSubmitted(true);

    }
    //width: '600px', height: '600px', 
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={handleOnChange}
            style={{ width: '800px', height: '450px', marginLeft: '25px', textAlign: 'center', marginTop: '20px' }}>
            <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="nameValidation">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        autofocus
                        type="text"
                        placeholder="Juan"
                        name="Name"
                        value={formData.Name}
                        onChange={handleOnChange}
                        isValid={formData.Name.length >= 3}
                        isInvalid={formData.Name.length < 3}
                    />
                    <Form.Control.Feedback type="invalid">
                        El nombre debe poseer más de tres caracteres
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="surnameValidation">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Perez"
                        name="Surname"
                        value={formData.Surname}
                        onChange={handleOnChange}
                        isValid={formData.Surname.length >= 3}
                        isInvalid={formData.Surname.length < 3}
                    />
                    <Form.Control.Feedback type="invalid">
                        El apellido debe poseer más de tres caracteres
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="emailValidation">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="Email"
                        placeholder="correo@electrónico.com"
                        required
                        value={formData.Email}
                        onChange={handleOnChange}
                        isValid={expresion.test(formData.Email)}
                        isInvalid={!expresion.test(formData.Email)}
                    />
                    <Form.Control.Feedback type="invalid">
                        El formato válido de correo electrónico debe ser el siguiente: correo@electronico.com
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="telValidation">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="number"
                        name="Tel"
                        placeholder="3514685216"
                        required
                        value={formData.Tel}
                        onChange={handleOnChange}
                        isValid={formData.Tel.length >= 10}
                        isInvalid={formData.Tel.length < 10}
                    />
                    <Form.Control.Feedback type="invalid">
                        El número de teléfono debe contar con un mínimo de 10 dígitos
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3" md="4" style={{ display: 'flex', flexDirection: 'row' }}>
                <Button onClick={handleSubmit} style={{ marginLeft: '250px' }}>Confirmar Compra</Button>
            </Row>
        </Form>
    );
}


export default OrderForm;

/*
navigate("/checkout")
<Link to={`/checkout`}>
                        <Button style={{ width: '200px', marginLeft: '90px', marginRight: 'auto' }} type="submit">Confirmar Compra</Button>
                    </Link>
*/

/*
<Button //type="submit"
                    onClick={handleSubmit}
                //onClick={validateFields() ? createOrder() : console.log("Faltan Validaciones")}
                >Confirmar Compra</Button>
*/

/*
{submitted === true
                    ?
                    <Link to={`/checkout`}>
                        <Button style={{ width: '200px', marginLeft: '90px', marginRight: 'auto' }} onClick={handleSubmit}>Confirmar Compra</Button>
                    </Link>
                    :
                    <Button //type="submit"
                        style={{ width: '200px', marginLeft: '90px', marginRight: 'auto' }}
                        onClick={handleSubmit}
                    //onClick={validateFields() ? createOrder() : console.log("Faltan Validaciones")}
                    >Confirmar Compra</Button>
                }
*/