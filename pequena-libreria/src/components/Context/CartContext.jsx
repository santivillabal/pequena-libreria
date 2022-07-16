import React, {createContext, useState, useEffect} from 'react'
import {collection, getFirestore, getDocs} from 'firebase/firestore'
export const MiContexto = createContext({})

export default function CartContext({children}) {

// Array de libros

    const [libros, setLibros] = useState([])
    const db = getFirestore()
    const catalogo = collection(db, 'catálogo');

    useEffect(() => {
        getDocs(catalogo)
        .then((snapshot) => {
            setLibros(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        })
        .catch(error => {
            console.log("Error:" + error);
        })
    }, []);
console.log('render')

    // Cart
    
    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => carrito.find(item => item.id === id) ? true : false;

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            setCarrito(carrito.map(prod => prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod))
        }
        else {
            setCarrito([...carrito, { ...item, cantidad }])
        }
    }

    const deleteItem = (id) => {
        return setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const clear = () => {
        setCarrito([])
    }

    const itemQty = () => {
        return carrito.reduce((acc, x) => acc += x.cantidad, 0)
    }

    const itemPrice = () => {
        return carrito.reduce((acc, x) => acc += x.cantidad * x.precio, 0)
    }

    return (
    <MiContexto.Provider value={{ libros, setLibros, addItem, deleteItem, itemPrice, itemQty, carrito, setCarrito, clear }}>
        {children}
    </MiContexto.Provider>
  )
}
