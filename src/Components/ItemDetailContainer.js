import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {

        const db = getFirestore();

        const beer = doc(db, "Beers", id);

        getDoc(beer).then((snapshot) => {
            setItem(snapshot.data());
        })
    }, []);


    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer

// backgroundColor: '#716add'

//backgroundColor: '#716add', 