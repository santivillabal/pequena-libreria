import React, { useState } from 'react';

export default function ItemCounter({inicial, stock, onAdd}){
    const [x, setX] = useState(inicial);
    const suma = () =>{
        if (x < stock){
            setX(x + 1)
        }
        else {alert("No hay suficiente stock de este producto.")}
    }
    const resta = () =>{
        if (x > inicial){
            setX(x - 1)
        }
        else {alert("No se pueden quitar más productos.")}
    }


    return (
        <>
        <div className='cont'>
            <button className='btn' onClick={resta}> - </button>
            {x}
            <button className='btn' onClick={suma}> + </button>
        </div>
        <button className='btn btnOnAdd' onClick={() => onAdd(x)}>Agregar al carrito</button>
        </>
        )
}