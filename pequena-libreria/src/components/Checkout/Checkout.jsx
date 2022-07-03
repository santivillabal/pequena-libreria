import React, { useContext, useState } from 'react'
import { MiContexto } from '../Context/CartContext';
import swal from 'sweetalert';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

export default function Checkout() {

  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [regalo, setRegalo] = useState(false)
  const {carrito, itemPrice, clear} = useContext(MiContexto)
  const db = getFirestore()
  const orderCollection = collection(db, 'orden')
  console.log(itemPrice())

  function handleClick(e) {
    e.preventDefault()

    if(!nombre || !celular || !email) return;

    const orden = {
      buyer: {nombre, celular, email},
      items: carrito,
      total: itemPrice(),
      envolver: regalo,
    }
    addDoc(orderCollection, orden).then(({id}) => {
      console.log(id)
    })
    
    clear()
    
    swal("¡Orden confirmada!", "Dentro de las próximas 24 horas nos pondremos en contacto contigo para coordinar el envío.", "success")
    .then(function() {
      window.location = "/Cart";
    });

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
            <label><input type="checkbox" onChange={(e) => setRegalo(true)} />Envolver para regalo</label>
            <br />
            <br />
            <input type="submit" className='btn' onClick={handleClick} value="Confirmar orden" />
          </form>
        </div>
        
    </>
  )
}
