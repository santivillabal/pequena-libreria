import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {


    const [libros, setLibros] = useState([])


    useEffect(() => {
        fetch('./catalogo.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setLibros(data);
        })
        .catch(error => {
            console.log("Error:" + error);
        });
    }, [ ]);
    return(
        <ItemDetail libro={libros} />
    )

}

export default ItemDetailContainer