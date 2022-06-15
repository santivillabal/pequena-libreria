import React, { useEffect, useState } from "react";

import catalogo from "../../catalogo.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {


    const [libros, setLibros] = useState([])
    const [libroBuscado, setLibroBuscado] = useState();
    const [loader, setLoader] = useState(true);


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
        const seleccion = 2;
        if (libros.length > 0) {
            const select = libros.find(libro => libro.id == seleccion);
            setLibroBuscado(select);
            setLoader(false);
        }
    }, [libros]);
    console.log(libroBuscado)
    console.log(libros)
    return (
        <>{
            loader ? <div>Cargando...</div> :
                <ItemDetail libro={libroBuscado} />
        }

        </>
    )

}

export default ItemDetailContainer