import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemCounter({inicial, stock}){

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
    const [mostrar, setMostrar] = useState(true);
    const onAdd = () =>{
        setMostrar(!mostrar)
    }



    return (
        <>
        <div className='cont'>
            <button className='btn' onClick={resta}> - </button>
            {x}
            <button className='btn' onClick={suma}> + </button>
        </div>
        {mostrar ? (<button className='btn btnOnAdd' onClick={() => onAdd()}>Agregar producto</button>) : <Link to="/cart" className="btn">Ir al carrito</Link>}
        </>
    )
}