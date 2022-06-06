import React from "react";
import './App.css';
import ItemCounter from "./components/ItemCounter/ItemCounter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from './components/Navbar/Navbar';


function App() {

  const onAdd = (x) =>{
    alert(`${x} productos agregados al carrito.`)
  }

  return (
          <>
            <Navbar />
            <ItemListContainer />
            <ItemCounter  stock={20} inicial={1} onAdd={onAdd} />
          </>
  );
}

export default App;
