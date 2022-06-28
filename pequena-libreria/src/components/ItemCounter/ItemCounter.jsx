import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemCounter({stock, mostrar, onAdd, inicio, libro}){

    const [x, setX] = useState(parseInt(inicio))

    const suma = () =>{
        if (x < stock){
            setX(x + 1)
        }
        else {alert("No hay suficiente stock de este producto.")}
    }

    const resta = () =>{
        if (x > 1){
            setX(x - 1)
        }
        else {alert("No se pueden quitar más productos.")}
    }

    useEffect(() => {
        setX(parseInt(inicio))
    }
        , [inicio])

    return (
        <>
            {mostrar ?
            <>
                <div className='cont'>
                    <button className='btn' onClick={resta}> - </button>
                    {x}
                    <button className='btn' onClick={suma}> + </button>
                </div>
                <button className='btn btnOnAdd' onClick={() => {onAdd(x)}}>Agregar producto</button>
            </>
            : <div className='cont'>
                <Link to="/home" className="btn">Seguir comprando</Link>
                <Link to="/cart" className="btn">Ir al carrito</Link>
              </div>
            }
        </>
    )
}