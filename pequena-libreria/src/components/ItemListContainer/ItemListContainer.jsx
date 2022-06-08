import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){

    const [libros, setLibros] = useState([])

    useEffect(() => {
        fetch("catalogo.json")
            .then(res => res.json())
            .then(res => setLibros(res))
            .catch(error => console.error("Error:", error))
    }, [])
    console.log(libros)

    return(
        <div>
            <ItemList libros={libros} />
        </div>
)}

export default ItemListContainer