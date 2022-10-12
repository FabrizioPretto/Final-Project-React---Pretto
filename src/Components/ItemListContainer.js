
import './ItemListContainer.css';

const ItemListContainer = ({titulo, logoSaludo}) => {

  return (
    <div className = "bienvenida">
    <h3>{titulo}</h3>
    <img id = "logoSaludo" alt= "logo_tienda" src = {logoSaludo} />
    </div>  
  );
}

export default ItemListContainer;