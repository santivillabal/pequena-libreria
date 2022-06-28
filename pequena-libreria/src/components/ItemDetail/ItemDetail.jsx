import React, {useContext, useState} from 'react'
import { MiContexto } from '../Context/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'

export default function ItemDetail({ libro }) {
    const { titulo, autor, precio, portada, sinopsis, stock } = libro

    const [mostrar, setMostrar] = useState(true);
    const {addItem} = useContext(MiContexto)

    const onAdd = (quantity) => {
        setMostrar(false)
        addItem(libro, quantity)
    }

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
                        <ItemCounter stock={stock} inicio={1} mostrar={mostrar} onAdd={onAdd} libro={libro} />
                    </div>

                </div>
            </div>
    </>)
}
