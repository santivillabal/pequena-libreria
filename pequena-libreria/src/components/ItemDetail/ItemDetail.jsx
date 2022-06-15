import React from 'react'

export default function ItemDetail({libro}) {

    return (
      <>
        <div className="item-detail-card">
            <div>
                <img src={libro.portada} className="portada" alt="Portada de libro" />
            </div>
            <div className="card-body card-body-cont">
                <h5 className="card-title">{libro.titulo}</h5>
                <p className="card-text">{libro.autor}</p>
                <p className="card-text">${libro.precio}</p>
                <a href="#" className="btn">Agregar al carrito</a>
            </div>
        </div>
    </>)
}
