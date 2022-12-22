import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemCategoryContainer = () => {

    const [filterItems, setfilterItems] = useState([]);

    const { brewery } = useParams();

    let filtrado = [];

    useEffect(() => {
        const db = getFirestore();

        filtrado = query(collection(db, "Beers"), where("Brewery", "==", brewery))
        getDocs(filtrado).then((snapshot) => {
            setfilterItems(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
    }, [brewery]);

    return (
        <>
            <ItemList items={filterItems} />
        </>
    );
}

export default ItemCategoryContainer;

