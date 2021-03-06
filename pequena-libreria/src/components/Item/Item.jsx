import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({libro}) {

    return (
      <>
        <div className="card catalogo-card">
            <img src={libro.portada} className="portada" alt="Portada de libro" />
            <div className="card-body card-body-cont">
                <h5 className="card-title">{libro.titulo}</h5>
                <p className="card-text">{libro.autor}</p>
                <p className="card-text">${libro.precio}</p>
                <Link to={`/item/${libro.id}`} className="btn"> VER MÁS </Link>
            </div>
        </div>
    </>)
}
