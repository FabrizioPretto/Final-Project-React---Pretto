import NavBarHeader from './Components/NavBarHeader'
import './App.css';
import ItemListContainer from './Components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import logotipo from './Components/Images/lupulo.jpg'

function App() {
  return (
    <div className="App">
      <NavBarHeader/>
      <ItemListContainer
      titulo = "Bienvenidos a Lupulenta"
      logoSaludo = {logotipo}
      />
    </div>
  );
}

export default App;

