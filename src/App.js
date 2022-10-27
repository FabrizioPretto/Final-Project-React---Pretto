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
        <NavBarHeader />

        <Routes>
          <Route path="/" exact element={<ItemListContainer />}></Route>
          <Route path="/home" exact element={<ItemListContainer />}></Route>
          <Route path="/item/:id" exact element={<ItemDetailContainer />}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  )


  /*
    return (
      <div className="App">
        <NavBarHeader />
        <ItemListContainer />
      </div>
    );*/
}

export default App;
