import ItemList from './ItemList';
import { useState, useEffect } from "react";
import OrdenarButton from './OrdenarButton';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const db = getFirestore();

    const beerItems = collection(db, "Beers");

    getDocs(beerItems).then((snapshot) => {

      setItems(snapshot.docs.map((doc) => ({ ...doc.data() })))

    });
  }, []);


  return (
    <>

      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;

/*
<OrdenarButton />
*/
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

/*
async function beersApi() {
      const beers = await getBeers();
      //if (brewery === undefined)
      setItems(beers);
      else {
        filtrado = beers.filter((beer) => beer.Brewery.includes(brewery)).map((beer, i) => filtrado[i] = beer);
        setItems(filtrado);
    };
useEffect(() => {
      //beersApi();
  }, []);

*/