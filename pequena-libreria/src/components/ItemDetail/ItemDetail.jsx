import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

export default function ItemDetail({libro}) {
    const {titulo, autor, precio, portada, sinopsis, stock} = libro

    return (
      <>
        <div className="detailContainer">
                <div className="detailImgContainer">
                    <img src={portada} className="cover" alt="Portada de libro" />
                </div>
                <div className="card-body">
                    <div className="productFeatures">
                        <h5 className="detailTitle">{titulo}</h5>
                        <p className="detailAuthor">{autor}</p>
                        <p className="detailPrice">${precio}</p>               
                    </div>
                    <div className="productDescription">{sinopsis}</div>
                    <div className="productPurchase">
                        <ItemCounter stock={stock} libro={libro} />
                    </div>

                </div>
            </div>
    </>)
}
