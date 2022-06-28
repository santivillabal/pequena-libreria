import React, {useContext} from 'react'
import { MiContexto } from '../Context/CartContext'


export default function CartList(libro) {
  const { deleteItem } = useContext(MiContexto)
  console.log(libro.libro.id)

  return (
    <>
    <div className='cart-cont'>
        <img src={libro.libro.portada} className="portada-cart" alt="Portada de libro" />
            <h5 className="card-title">{libro.libro.titulo}</h5>
            <p className="card-text">{libro.libro.cantidad}</p>
            <p className="card-text">${libro.libro.precio * libro.libro.cantidad}</p>
            <button className="btn btn-ver-mas" onClick={() => { deleteItem(libro.libro.id) }}>Eliminar</button>
    </div>
    </>
  )
}
