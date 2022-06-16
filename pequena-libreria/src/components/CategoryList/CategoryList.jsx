import React from 'react'
import Item from '../Item/Item'

const CategoryList = ({categoria}) => {


    return (
      <div className='catalogo-cont'>
          { categoria.map(libro => (<Item key={libro.id} libro={libro} />)) }
      </div>
    )
  }
  
  export default CategoryList