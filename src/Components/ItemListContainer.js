import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import OrderButton from './OrderButton';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { order } = useParams();

  useEffect(() => {

    if (order == undefined) {
      const db = getFirestore();

      const beerItems = collection(db, "Beers");

      getDocs(beerItems).then((snapshot) => {

        setItems(snapshot.docs.map((doc) => ({ ...doc.data() })))

      });
    }
  }, [items]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
