import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList'
import { MiContexto } from '../Context/CartContext';

const CategoryContainer = () => {
  
  const {categoryId} = useParams();
  const {libros} = useContext(MiContexto)
  const [categoriaSelec, setCategoriaSelec] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
      if (libros.length > 0) {
          const select = libros.filter(libro => libro.categoria === categoryId);
          setCategoriaSelec(select);
          setLoader(false);
      }
  }, [categoryId, libros]);

  return (
      <>{
          loader ? <div className="d-flex justify-content-center align-middle"><div className="spinner-border text-secondary align-middle" role="status"><span className="visually-hidden">Cargando...</span></div></div>
          :
          <CategoryList categoria={categoriaSelec} />
      }

      </>
  )

}

export default CategoryContainer