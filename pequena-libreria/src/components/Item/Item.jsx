import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({libro}) {
    const {titulo, autor, precio, portada} = libro

    return (
      <>
        <div className="card catalogo-card">
            <img src={portada} className="portada" alt="Portada de libro" />
            <div className="card-body card-body-cont">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{autor}</p>
                <p className="card-text">${precio}</p>
                <Link to="/item:id" className="btn btn-ver-mas">Ver más</Link>
            </div>
        </div>
    </>)
}
