import React from 'react'


export default function CartList(libro) {

  return (
    <>
    <div className='cart-cont'>
        <img src={libro.portada} className="portada-cart" alt="Portada de libro" />
        <div className="cart-card">
            <h5 className="card-title">{libro.titulo}</h5>
            <p className="card-text">{libro.cantidad}</p>
            <p className="card-text">${libro.precio * libro.cantidad}</p>
            <button className="btn btn-ver-mas">Eliminar</button>
        </div>
    </div>
    </>
  )
}
