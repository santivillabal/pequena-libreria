import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { MiContexto } from '../Context/CartContext';
import swal from 'sweetalert';

export default function Checkout() {

  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const {carrito} = useContext(MiContexto)
  const {itemPrice} = useContext(MiContexto)
  console.log(itemPrice())

  function handleClick() {

    if(!nombre || !celular || !email) return;

    swal("¡Orden confirmada!", "Dentro de las próximas 24 horas nos pondremos en contacto contigo para coordinar el envío.", "success");
    const orden = {
      buyer: {nombre, celular, email},
      items: carrito,
      total: itemPrice(),
    }
    console.log(orden)
  }

  return (
    <>
        <div className='checkout-container'>
          <form className='input-container'>
            <input type="text" onChange={(e) => setNombre(e.target.value)} required placeholder='Nombre' />
            <br />
            <br />
            <input type="number" onChange={(e) => setCelular(e.target.value)} required placeholder='Número de celular' />
            <br />
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} required placeholder='Correo electrónico' />
            <br />
            <br />
            <input type="submit" className='btn' onClick={handleClick} value="Confirmar orden" />
          </form>
        </div>
        
    </>
  )
}
