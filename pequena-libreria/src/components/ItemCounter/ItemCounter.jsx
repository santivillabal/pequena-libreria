import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../Context/CartContext';

export default function ItemCounter({stock, libro}){

    const {x} = useContext(MiContexto)
    const {setX} = useContext(MiContexto)
    const {resta} = useContext(MiContexto)
    const {addItem} = useContext(MiContexto)
    const {mostrar} = useContext(MiContexto)

    const suma = () =>{
        if (x < stock){
            setX(x + 1)
        }
        else {alert("No hay suficiente stock de este producto.")}
    }



    return (
        <>
        <div className='cont'>
            <button className='btn' onClick={resta}> - </button>
            {x}
            <button className='btn' onClick={suma}> + </button>
        </div>
        {mostrar ? (<button className='btn btnOnAdd' onClick={() => addItem(libro, x)}>Agregar producto</button>) : <Link to="/cart" className="btn">Ir al carrito</Link>}
        </>
    )
}