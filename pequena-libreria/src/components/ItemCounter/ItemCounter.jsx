import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function ItemCounter({stock, mostrar, onAdd, inicio, libro}){

    const [x, setX] = useState(parseInt(inicio))

    const suma = () =>{
        if (x < stock){
            setX(x + 1)
        }
        else {swal("No hay suficiente stock de este producto.")}
    }

    const resta = () =>{
        if (x > 1){
            setX(x - 1)
        }
        else {swal("No se pueden quitar más productos.")}
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
                    <div className='counter-cont'>
                    <button className='btnmasmenos' onClick={resta}> - </button>
                    {x}
                    <button className='btnmasmenos' onClick={suma}> + </button>                        
                    </div>
                    <button className='btn btnOnAdd' onClick={() => {onAdd(x)}}>AGREGAR PRODUCTO</button>
                </div>
            </>
            : <div className='cont'>
                <Link to="/home" className="btn">SEGUIR COMPRANDO</Link>
                <Link to="/cart" className="btn btn-iralcarrito">IR AL CARRITO</Link>
              </div>
            }
        </>
    )
}