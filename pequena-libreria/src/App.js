import React from "react";
import './App.css';
import ItemCounter from "./components/ItemCounter/ItemCounter";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import Producto from './components/Producto/Producto';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  const onAdd = (x) =>{
    alert(`${x} productos agregados al carrito.`)
  }

  return (
          <>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item:id" element={<ItemDetailContainer />} />
              </Routes>
            <Footer />

          </BrowserRouter>

            <ItemCounter  stock={20} inicial={1} onAdd={onAdd} />


          </>
  );
}

export default App;
