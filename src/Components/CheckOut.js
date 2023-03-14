import { useParams } from "react-router-dom";
import { collection, getFirestore, doc, getDoc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import check from './Images/check.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CheckOut = () => {

    const { orderDate } = useParams();

    const [orders, setOrders] = useState([]);
    let maxDate = new Date(2015, 12, 31);
    let buyDate = new Date;
    let weekday;
    let idOrder = { buyer: { Name: '', Surname: '', Email: '', Tel: '' }, date: maxDate, items: { id: '', title: '', price: '' }, total: '' }
    //order.dateProperty assignment expected.ts(11 = new Date();//firebase.firestore.Timestamp.fromDate(new Date());


    useEffect(() => {

        const db = getFirestore();
        const ordersArray = collection(db, "Orders");

        getDocs(ordersArray).then((snapshot) => {
            setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })

    }, []);

    return (
        <>
            {orders.map((order) => {
                //let timestamp = new Date(order.date);
                //console.log(timestamp.toDateString());
                if (order.date.toDate() > maxDate) {
                    maxDate = order.date.toDate();
                    idOrder = order;
                }
                buyDate = idOrder.date.toDate();
            }
            )

            }

            <CardGroup style={{ marginLeft: 'auto', marginRight: 'auto', width: '1300px', height: '250px', marginTop: '20px' }}>
                <Card>
                    <Card.Img variant="top" src={check} style={{ width: '125px', height: '125px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Card.Body>
                        <Card.Title>¡Gracias por tu Compra!</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {/* {console.log(buyDateOrder)} */}
                            La misma fue realizada el día
                            <strong> {buyDate.toLocaleDateString('es-Ar', { weekday: 'long' }).charAt(0).toUpperCase()
                                + buyDate.toLocaleDateString('es-Ar', { weekday: 'long' }).substring(1)} </strong>
                            <strong> {buyDate.toLocaleDateString('es-Ar', { day: 'numeric', month: 'long', year: 'numeric' })} </strong>
                            a las <strong>{buyDate.toLocaleDateString('es-Ar', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).substring(10)}</strong> hs.
                            <br></br>A nombre de <strong>{idOrder.buyer.Name} {idOrder.buyer.Surname}</strong> por un total de <strong>${idOrder.total}</strong>
                            <br></br>El identificador de su compra es: <strong>{idOrder.id}</strong>
                            <br></br>Ante cualquier consulta nos comunicaremos al teléfono <strong>{idOrder.buyer.Tel}</strong>
                            <br></br>Recibirás un correo electrónico en la casilla: <strong>{idOrder.buyer.Email}</strong>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/`}>
                            <Button style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>Regresar al Inicio</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    )

}

export default CheckOut;


/*
idOrder.buyer.Name != ''
        ?
         <>
            <div>
                    <h3>CHECKOUT</h3>
                    <h4>{idOrder}</h4>
                    <h4>{idOrder.buyer.Name}</h4>
                    <h4>{idOrder.buyer.Surname}</h4>
                    <h4>{idOrder.date}</h4>
                    <h4>{idOrder.total}</h4>
                </div>
            </div>
         </>
*/



/*
const db = getFirestore();
const beerItems = collection(db, "Beers");
getDocs(beerItems).then((snapshot) => {
    switch (order) {
        case "minPrice":
            {
                orderBy = (snapshot.docs.map((doc) => ({ ...doc.data() }))).sort(function (a, b) { return (a.Price - b.Price); })
                setItems(orderBy);
                break;
            }
    }
})*/