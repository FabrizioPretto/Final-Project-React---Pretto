import ItemList from './ItemList';
import { getBeers } from './Beers';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrdenarButton from './OrdenarButton';
import { darkModeContext } from '../Context/Context';
import { useContext } from 'react';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { brewery } = useParams();

  let filtrado = [];

  async function beersApi() {
    const beers = await getBeers()
    if (brewery === undefined)
      setItems(beers);
    else {
      filtrado = beers.filter((beer) => beer.Brewery.includes(brewery)).map((beer, i) => filtrado[i] = beer);
      setItems(filtrado);
    }
  };

  useEffect(() => {
    beersApi();
  }, []);

  const isDarkMode = useContext(darkModeContext);

  return (
    <>
      <darkModeContext.Provider value={false}>
        <OrdenarButton />
        {isDarkMode + "ss"}
        <ItemList items={items} />
      </darkModeContext.Provider>
    </>
  );
}

export default ItemListContainer;


/*
function ordenar()
{
    let seleccion = $("#miSeleccion").val();
    if (seleccion == "menor") {
        productosJSON.sort(function(a, b) {
            return a.precio - b.precio
        });
    } else if (seleccion == "mayor") {
        productosJSON.sort(function(a, b) {
            return b.precio - a.precio
        });
    } else if (seleccion == "alfabetico") {
        productosJSON.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("#listadoProductos").empty();
    renderizarProductos();
    
}
*/