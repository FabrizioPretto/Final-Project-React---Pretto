import ItemList from './ItemList';
import { getBeers } from './Beers';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  const [items, setItems] = useState([]);

  /*const bb = props.brewery
  console.log(bb)*/

  //FALTA FILTRAR EL ARRAY DE ACUERDO A LA CATEGORÍA (Brewery) PARA ENVIAR EL PARÁMETRO ITEMS


  const { categoryBrewery } = useParams();


  async function beersApi() {
    const beers = await getBeers()
    if (categoryBrewery === undefined) {
      setItems(beers);
    }
    else {


    }

  };


  useEffect(() => {
    beersApi();
  }, []);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;

