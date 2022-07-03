import React from 'react'
import Item from '../Item/Item'

const ItemList = ({libros}) => {
  return (
    <div className='container catalogo-cont'>
        { libros.map(libro => (<Item key={libro.id} libro={libro} />)) }
    </div>
  )
}

export default ItemList