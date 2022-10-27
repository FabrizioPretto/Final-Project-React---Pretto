import NavBarHeader from './Components/NavBarHeader'
import './App.css';
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBarHeader brewery={["Bierhaus", "Astor", "Baba", "Beata", "Kraken", "Mur", "Peñón del Águila", "Strange Brewing"]} />
        <Routes>
          <Route path="/" exact element={<ItemListContainer />}></Route>
          <Route path="/category/:brewery" exact
            element={<ItemListContainer brewery={["Bierhaus", "Astor", "Baba", "Beata", "Kraken", "Mur", "Peñón del Águila", "Strange Brewing"]} />}></Route>
          <Route path="/item/:id" exact element={<ItemDetailContainer />}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  )


}

export default App;
