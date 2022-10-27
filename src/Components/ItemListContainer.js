import ItemList from './ItemList';
import { getBeers } from './Beers';
import React, { useState, useEffect } from "react";


const ItemListContainer = (props) => {

  const [items, setItems] = useState([]);

  async function beersApi() {
    const beers = await getBeers()
    setItems(beers);
  };


  useEffect(() => {
    beersApi();
  }, []);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;

