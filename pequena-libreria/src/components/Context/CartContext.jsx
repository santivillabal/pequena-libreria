import React, {createContext, useState, useEffect} from 'react'
import catalogo from "../../catalogo.json";
export const MiContexto = React.createContext({})

export default function CartContext({children}) {

// Array de libros

    const [libros, setLibros] = useState([])
    useEffect(() => {
        //pedido con promise
        const productos = new Promise((resolve, reject) => {
            resolve(catalogo);
        }
        );
        productos.then(data => {
            setLibros(data);
        }
        ).catch(error => {
            console.log("Error:" + error);
        }
        );
    }, []);


// Item Counter

    const [x, setX] = useState(1);
    const resta = () =>{
        if (x > 1){
            setX(x - 1)
        }
        else {alert("No se pueden quitar más productos.")}
    }
    const [mostrar, setMostrar] = useState(true);


    // Cart
    
    const [carrito, setCarrito] = useState([]);
    const [itemQty, setItemQty] = useState();
    const [itemPrice, setItemPrice] = useState();

    const addItem = (item, cantidad) => {
        setMostrar(!mostrar)
        const newItem = {...item, cantidad}
        if (isInCart(newItem.id)) {
            const findProduct = carrito.find(prod => prod.id === newItem.id)
            const productIndex = carrito.indexOf(findProduct)
            const auxcart = [...carrito]
            auxcart[productIndex].cantidad += cantidad
            setCarrito(auxcart)
        }else{
            // setCarrito([...carrito], newItem)
            setCarrito([carrito.push(newItem)])
            console.log(carrito)
        }
        setItemQty(carrito.reduce((acc, x) => acc += x.cantidad, 0))
        setItemPrice(carrito.reduce((acc, x) => acc += x.cantidad * x.precio, 0))

    }

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const deleteItem = (id) => {
        return setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const clear = () => {
        setCarrito([])
    }



    return (
    <MiContexto.Provider value={{libros, setLibros, mostrar, x, setX, resta, addItem, isInCart, deleteItem, itemPrice, itemQty, carrito, setCarrito, clear}}>
        {children}
    </MiContexto.Provider>
  )
}
