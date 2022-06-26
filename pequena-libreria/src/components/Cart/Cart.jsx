import React from 'react'
import { useContext } from 'react'
import { MiContexto } from '../Context/CartContext'
import CartList from '../CartList/CartList'

export default function Cart() {
  const {carrito} = useContext(MiContexto)
  console.log(carrito)


  return (
    <>
        { carrito.map(libro => (<CartList key={libro.id} libro={libro} />)) }
    </>
  )
}
