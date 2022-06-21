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
    const [carrito, setCarrito] = useState([    {
        "id": 2,
        "titulo": "El imperio final",
        "autor": "Brandon Sanderson",
        "cantidad": 1,
        "categoria": "Fantasía",
        "precio": 590,
        "stock": 15,
        "portada": "/assets/ElImperioFinal.jpg",
        "sinopsis": "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia.\nPero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn).\nAhora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador.\nPero, ¿qué pasa si el héroe de la profecía falla?"
    }]);
    console.log(carrito)

    function addItem(item, quantity){
        item.cantidad = quantity;
        console.log(item.id)
        setMostrar(!mostrar)
        if (carrito.includes(producto => producto.id = item.id)){
            carrito.item.cantidad = carrito.item.cantidad + quantity
        }
        else{
            setCarrito(carrito.push(item))
        }    console.log(carrito)
    }

    const clear = () => {
        setCarrito([])
    }

    // addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
    // removeItem(itemId) // Remover un item del cart por usando su id
    // clear() // Remover todos los items
    // isInCart: (id) => true|false
    


    return (
    <MiContexto.Provider value={{libros, setLibros, mostrar, x, setX, resta, addItem, carrito, setCarrito, clear}}>
        {children}
    </MiContexto.Provider>
  )
}
