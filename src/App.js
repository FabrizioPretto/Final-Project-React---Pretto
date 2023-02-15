import NavBarHeader from './Components/NavBarHeader'
import './App.css';
import ItemOrderContainer from './Components/ItemOrderContainer';
import ItemCategoryContainer from './Components/ItemCategoryContainer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CheckOut from './Components/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import CartProvider from './Context/CartContext';
import SubHeader from './Components/SubHeader';
import SlideShow from './Components/SlideShow';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: '#f8f9fa' }}>
          <NavBarHeader props={["Bierhaus", "Astor", "Baba", "Beata", "Kraken", "Mur", "Peñón del Águila", "Strange Brewing"]} />
          <SubHeader />
          <SlideShow />
          <div id='routesContainer' style={{ display: 'flex', flexDirection: 'row', height: '2600px', alignItems: 'baseline', marginLeft: 'auto', marginRight: 'auto' }}>
            <Routes>
              <Route path="/" exact element={<ItemListContainer />}></Route>
              <Route path="/orderBy/:order" exact element={<ItemOrderContainer />}></Route>
              <Route path="/category/:brewery" exact element={<ItemCategoryContainer />}></Route>
              <Route path="/item/:id" exact element={<ItemDetailContainer />}></Route>
              <Route path="/cart" exact element={<Cart />}></Route>
              <Route path="/checkout" exact element={<CheckOut />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
//<Route path="/checkout/:order" exact element={<CheckOut />}></Route>