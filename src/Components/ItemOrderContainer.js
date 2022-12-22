import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getDocs, collection, getFirestore } from 'firebase/firestore';

const ItemOrderContainer = () => {

  const { order } = useParams();
  const [items, setItems] = useState([]);
  let orderBy = [];

  useEffect(() => {

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
        case "maxPrice":
          {
            orderBy = (snapshot.docs.map((doc) => ({ ...doc.data() }))).sort(function (a, b) { return (b.Price - a.Price); })
            setItems(orderBy);
            break;
          }
        case "alphabetic":
          {
            orderBy = (snapshot.docs.map((doc) => ({ ...doc.data() }))).sort(function (a, b) { return (a.Name).localeCompare(b.Name); })
            setItems(orderBy);
            break;
          }
        default:
          break;
      }
    });
  }, [order]);

  return (<><ItemList items={items} /></>);
}

export default ItemOrderContainer;
