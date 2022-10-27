import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getBeers } from './Beers';


const ItemDetailContainer = () => {



    const { id } = useParams()

    const [item, setItem] = useState([])

    async function getBeersArray() {
        const beers = await getBeers();
        setItem(beers[id]);
    };



    useEffect(() => {

        getBeersArray();

    }, [])


    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer

