import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {


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
        <div>
            <ItemList libros={libros} />
        </div>
)}

export default ItemListContainer