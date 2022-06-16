import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogo from "../../catalogo.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams();
    console.log(id)
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
        if (libros.length > 0) {
            const select = libros.find(libro => libro.id == id);
            setLibroBuscado(select);
            setLoader(false);
            console.log(select)
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