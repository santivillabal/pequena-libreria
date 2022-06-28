import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MiContexto } from '../Context/CartContext'
import CartList from '../CartList/CartList'

export default function Cart() {
  const {carrito, itemPrice} = useContext(MiContexto)

  return (
    <>
      {carrito.length === 0 ?
        <div>
          <h5>No hay productos aún</h5>
          <Link to="/home" className="btn">Empezar a comprar</Link>
        </div>
      :
        <div className='cart-container'>
            { carrito.map(libro => (<CartList key={libro.id} libro={libro} />)) }
            <h1>Total: ${itemPrice()}</h1>
        </div>
      }
    </>
  )
}
