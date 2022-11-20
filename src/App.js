import NavBarHeader from './Components/NavBarHeader'
import './App.css';
import ItemCategoryContainer from './Components/ItemCategoryContainer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CheckOut from './Components/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import CartProvider from './Context/CartContext';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBarHeader props={["Bierhaus", "Astor", "Baba", "Beata", "Kraken", "Mur", "Peñón del Águila", "Strange Brewing"]} />
          <Routes>
            <Route path="/" exact element={<ItemListContainer />}></Route>
            <Route path="/category/:brewery" exact element={<ItemCategoryContainer />}></Route>
            <Route path="/item/:id" exact element={<ItemDetailContainer />}></Route>
            <Route path="/cart" exact element={<Cart />}></Route>
            <Route path="/checkout/:order" exact element={<CheckOut />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;


/*
useContext([CartContext]);


*/