import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import catalogo from "../../catalogo.json";

const ItemListContainer = () => {


    const [libros, setLibros] = useState([])


    useEffect(() => {
        //pedido con promise
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
    console.log(libros);
    return (
        <div>
            <ItemList libros={libros} />
        </div>
    )
}

export default ItemListContainer