import NavBarHeader from './Components/NavBarHeader'
import './App.css';
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBarHeader props={["Bierhaus", "Astor", "Baba", "Beata", "Kraken", "Mur", "Peñón del Águila", "Strange Brewing"]} />
        <Routes>
          <Route path="/" exact element={<ItemListContainer />}></Route>
          <Route path="/category/:brewery" exact element={<ItemListContainer />}></Route>
          <Route path="/item/:id" exact element={<ItemDetailContainer />}></Route>
          <Route path="/cart/:nro" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;
