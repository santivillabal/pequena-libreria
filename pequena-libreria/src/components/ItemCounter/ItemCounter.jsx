import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../Context/CartContext';

export default function ItemCounter({stock, libro}){

    const {x, setX, resta, addItem, isInCart, mostrar} = useContext(MiContexto)
    const onAdd = () => {
        addItem(libro, x)
        isInCart(libro.id)
    }

    const suma = () =>{
        if (x < stock){
            setX(x + 1)
        }
        else {alert("No hay suficiente stock de este producto.")}
    }



    return (
        <>
            {mostrar ?
            <>
                <div className='cont'>
                    <button className='btn' onClick={resta}> - </button>
                    {x}
                    <button className='btn' onClick={suma}> + </button>
                </div>
                <button className='btn btnOnAdd' onClick={() => {onAdd()}}>Agregar producto</button>
            </>
            : <Link to="/cart" className="btn">Ir al carrito</Link>
            }
        </>
    )
}