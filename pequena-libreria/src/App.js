import React from "react";
import './App.css';
import './components/ItemDetail/itemDetail.css';
import './components/Footer/footer.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/Context/CartContext";


function App() {

  return (
          <>
          <CartContext>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category/:categoryId" element={<CategoryContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            <Footer />

          </BrowserRouter>
          </CartContext>
          </>
  );
}

export default App;
