import React from 'react'

export default function ItemDetail({libro}) {
    const {titulo, autor, precio, portada} = libro

    return (
      <>
        <div className="item-detail-card">
            <div>
                <img src={portada} className="portada" alt="Portada de libro" />
            </div>
            <div className="card-body card-body-cont">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{autor}</p>
                <p className="card-text">${precio}</p>
                <a href="#" className="btn">Agregar al carrito</a>
            </div>
        </div>
    </>)
}
