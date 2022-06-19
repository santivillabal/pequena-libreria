import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList'
import catalogo from "../../catalogo.json";

const CategoryContainer = () => {
  
  const {categoryId} = useParams();
  const [libros, setLibros] = useState([])
  const [categoriaSelec, setCategoriaSelec] = useState([]);
  const [loader, setLoader] = useState(true);

  console.log(categoryId)
  useEffect(() => {
      const productos = new Promise((resolve, reject) => {
          resolve(catalogo);
      }
      );
      productos.then(data => {
          setLibros(data);
      }
      ).catch(error => {
          console.log("Error:" + error);
      }
      );
  }, []);

  useEffect(() => {
      if (libros.length > 0) {
          const select = libros.filter(libro => libro.categoria === categoryId);
          setCategoriaSelec(select);
          setLoader(false);
          console.log(select)
      }
  }, [categoryId, libros]);
console.log(categoriaSelec)

  return (
      <>{
          loader ? <div>Cargando...</div> :
              <CategoryList categoria={categoriaSelec} />
      }

      </>
  )

}

export default CategoryContainer