import React, { useState } from 'react';

export default function Funcion() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (<button type="button" onClick={() => {setShow(!show);}}>Mostrar</button>) : (<button>Agregar producto</button>)}</>
  );
};