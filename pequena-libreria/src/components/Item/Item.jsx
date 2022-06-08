import React from 'react'

export default function Item({libro}) {
    const {titulo, autor, precio, portada} = libro
    console.log(libro)

    return (
      <>
        <div className="card catalogo-card">
            <img src={portada} className="portada" alt="..." />
            <div className="card-body card-body-cont">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{autor}</p>
                <p className="card-text">${precio}</p>
                <a href="#" className="btn">Ver más</a>
            </div>
        </div>
    </>)
}
