import React from 'react'

export default function Item({libro}) {
    const {titulo, autor, precio, portada} = libro

    return (
      <>
        <div className="card" style="width: 18rem;">
            <img src={portada} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{autor}</p>
                <p className="card-text">${precio}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </>)
}
