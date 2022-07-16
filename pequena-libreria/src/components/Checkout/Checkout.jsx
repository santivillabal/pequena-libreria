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
      swal("¡Pedido confirmado!", "El código de tu orden es: " + id + ". Dentro de las próximas 24 horas nos pondremos en contacto contigo para coordinar el envío.", "success")
      .then(function() {
      window.location = "/Cart";
    });
    })
    
    clear()
    


  }

  return (
    <>
        <h3>Ingresa tus datos para terminar la compra</h3>        
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
            <label><input type="checkbox" onChange={(e) => setRegalo(true)} /> Envolver para regalo</label>
            <br />
            <br />
            <input type="submit" className='btn btn-confirmarOrden' onClick={handleClick} value="CONFIRMAR ORDEN" />
          </form>
        </div>
        
    </>
  )
}
