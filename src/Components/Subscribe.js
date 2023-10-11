import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';

function Subscribe() {

    const [validated, setValidated] = useState(false);
    const [subscriberData, setSubscriberData] = useState({ Email: '' })
    const [greaterThan, setGreaterThan] = useState(false);
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    useEffect(() => {
        if (validated === true) {
            saveUser();
        }
    }, [validated]);

    function handleOnChange(e) {
        setSubscriberData({ Email: e.target.value })
    }

    function handleGreaterThan(event) {
        if (greaterThan == false)
            setGreaterThan(true);
        else
            setGreaterThan(false);
    }

    function handleSubmit(event) {
        if (validated == false) {
            event.preventDefault();
            event.stopPropagation();
            validateSubscriber();
        }

    }

    function validateSubscriber() {
        if (!expresion.test(subscriberData.Email)) {
            setValidated(false);
        }
        else {
            if (greaterThan == false) {
                setValidated(false);
            }
            else {
                setValidated(true);
            }
        }
    }

    const saveUser = () => {

        if (greaterThan === true) {
            const db = getFirestore();

            const subscribersCollection = collection(db, "Subscribers");

            let subscriber = {};

            let newUser = query(collection(db, "Subscribers"), where("Email", "==", subscriberData.Email))

            getDocs(newUser).then((snapshot) => {
                if (snapshot.size === 0) {
                    subscriber = subscriberData;
                    addDoc(subscribersCollection, subscriber);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '¡Felicitaciones! Ya te encuentras subscripto',
                        html: 'Pronto comenzarás a recibir nuestros descuentos y promociones',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'El correo electrónico ya se encuentra subscripto',
                        showConfirmButton: false,
                        timer: 2500
                    })

                }
            })
            setSubscriberData({ Email: '' });
            setGreaterThan(false);
            setValidated(false);
        }
    }
    //, marginRight: '35px', , Empezar de 0 el return
    return (// fluid="lg"
        <Container>
            <Row>
                <Col xs={7} md={5}>
                    <Form id='suscriberForm' onChange={handleOnChange} onSubmit={handleSubmit} >
                        <Form.Group >
                            <Form.Control
                                type="email"
                                placeholder='correo@electrónico.com'
                                value={subscriberData.Email}
                                onChange={handleOnChange}
                                isValid={expresion.test(subscriberData.Email)}
                                feedback="El formato válido de correo electrónico debe ser el siguiente: correo@electronico.com"
                            />
                            <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={6} md={4}>
                    <Form.Check
                        id="check"
                        checked={greaterThan}
                        type="switch"
                        label="Soy mayor de 18 años"
                        feedback="Correcto"
                        onChange={handleGreaterThan}
                        isValid={greaterThan === true}
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}//marginRight: '40px', 
                    />

                </Col>
                {/* xs={6} */}
                <Col xs={6} md={3}>
                    <Button variant="primary" onClick={handleSubmit}>Suscribirse</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Subscribe;


/* Latest Version
<Container fluid="md">
            <Row>
                <Col xs={6} md={6} style={{ backgroundColor: 'yellow' }}>
                    <Form id='suscriberForm' onChange={handleOnChange} onSubmit={handleSubmit} >
                        <Form.Group >
                            <Form.Control
                                type="email"
                                placeholder='correo@electrónico.com'
                                value={subscriberData.Email}
                                onChange={handleOnChange}
                                isValid={expresion.test(subscriberData.Email)}
                                feedback="El formato válido de correo electrónico debe ser el siguiente: correo@electronico.com"
                            />
                            <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={6} md={4} style={{ backgroundColor: 'purple' }}>
                    <Form.Check
                        id="check"
                        checked={greaterThan}
                        type="switch"
                        label="Soy mayor de 18 años"
                        feedback="Correcto"
                        onChange={handleGreaterThan}
                        isValid={greaterThan === true}
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}//marginRight: '40px',
                    />

                </Col>

                <Col xs={6} md={4} style={{ backgroundColor: 'green' }}>
                    <Button variant="primary" onClick={handleSubmit}>Suscribirse</Button>
                </Col>
            </Row>
        </Container>



*/

/*
<Col >
                    <label >Soy mayor de 18 años</label>
                </Col>
*/

/*
<Col sm={2} style={{ backgroundColor: 'purple', justifyContent: 'flex-start' }}>
                    <Form.Check
                        id="check"
                        checked={greaterThan}
                        type="switch"
                        //label="Soy mayor de 18 años"
                        feedback="Correcto"
                        onChange={handleGreaterThan}
                        isValid={greaterThan === true}
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}//marginRight: '40px',
                    />

                </Col>
*/

/*
<label style={{ marginLeft: '10px', marginTop: 'auto', marginBottom: 'auto', backgroundColor: 'blue' }}>Soy mayor de 18 años</label>
*/

/*
<div id='suscriberDiv' style={{ display: 'inline-flex', flexWrap: 'nowrap', flexDirection: 'row', gap: '10px', alignItems: 'baseline' }} >
</div>sm={4}
*/


//Return Previo
/*
return (
        <Container fluid>
            <Row>
                <Col sm={6} style={{ backgroundColor: 'yellow' }}>
                    <Form id='suscriberForm' onChange={handleOnChange} onSubmit={handleSubmit} >
                        <Form.Group >
                            <Form.Control
                                type="email"
                                placeholder='correo@electrónico.com'
                                value={subscriberData.Email}
                                onChange={handleOnChange}
                                isValid={expresion.test(subscriberData.Email)}
                                feedback="El formato válido de correo electrónico debe ser el siguiente: correo@electronico.com"
                            />
                            <Form.Control.Feedback type='valid'>Correcto</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={2} style={{ backgroundColor: 'purple' }}>
                    <Form.Check
                        id="check"
                        checked={greaterThan}
                        type="switch"
                        //label="Soy mayor de 18 años"
                        feedback="Correcto"
                        onChange={handleGreaterThan}
                        isValid={greaterThan === true}
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}//marginRight: '40px', 
                    />

                </Col>
                <Col sm={4}>
                    <label >Soy mayor de 18 años</label>
                </Col>
                <Col sm={2} style={{ backgroundColor: 'green' }}>
                    <Button variant="primary" onClick={handleSubmit}>Suscribirse</Button>
                </Col>
            </Row>
        </Container>
    );
*/