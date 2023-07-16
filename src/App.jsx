import NavBar from "./componentes/NarBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider> 
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            path='/categoria/:idCategoria'
            element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
           <Route path="/cart" element= {<Cart/>} />
           <Route path="/checkout" element= {<Checkout/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
