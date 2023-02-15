import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';

function Subscribe() {

    const [subscriberData, setSubscriberData] = useState({ Email: '' })
    const [greaterThan, setGreaterThan] = useState(false);

    /*function handleGreater(e) {

        e.target.value
        setGreaterThan(true);
        console.log(greaterThan);
    }*/

    function handleOnChange(e) {
        setSubscriberData({ Email: e.target.value })
    }

    function handleGreaterThan(e) {
        setGreaterThan(!greaterThan);
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
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Debes seleccionar la casilla de mayor de 18 años',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'baseline', marginRight: '35px' }} >
            <Form onChange={handleOnChange} >
                <Form.Group >
                    <Form.Control
                        style={{ width: '360px' }}
                        type="email"
                        placeholder="Ingrese su correo electrónico para subscribirse"
                        value={subscriberData.Email}
                        onChange={handleOnChange}
                    />

                </Form.Group>
            </Form>
            <Form.Check
                defaultChecked={greaterThan}
                type="switch"
                label="Soy mayor de 18 años"
                feedback="Debes seleccionar la casilla"
                onChange={handleGreaterThan}
            />
            <Button variant="primary" onClick={() => saveUser()}>Suscribirse</Button>
        </div>
    );

}

export default Subscribe;
