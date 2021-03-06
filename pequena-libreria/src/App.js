import React from "react";
import './App.css';
import './components/ItemDetail/itemDetail.css';
import './components/Footer/footer.css';
import './components/Loader/loader.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/Context/CartContext";
import Checkout from "./components/Checkout/Checkout";

import { initializeApp } from "firebase/app";


function App() {

  initializeApp({
    apiKey: "AIzaSyBfRjWrnt3tFh32XAsVlnQBaq4rwAzpkpA",
    authDomain: "pequena-libreria.firebaseapp.com",
    projectId: "pequena-libreria",
    storageBucket: "pequena-libreria.appspot.com",
    messagingSenderId: "211163101953",
    appId: "1:211163101953:web:69af552420759b65a23900"
  });

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
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            <Footer />

          </BrowserRouter>
          </CartContext>
          </>
  );
}

export default App;
