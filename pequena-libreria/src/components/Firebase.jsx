import React, {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore';


export default function Firebase() {

    const [libros, setLibros] = useState([])
    const catalogo = 'libros'
    const db = getFirestore()
    const catalogoproductos = collection(db, catalogo)

    useEffect(() => {
        getDocs(catalogoproductos).then((res) => {
            // setLibros(res.docs.map((doc) => ({id: doc.id, ...doc.data() })))
            console.log(res.docs)
        })
    }, [])

  return (
    <div>Firebase</div>
  )
}
