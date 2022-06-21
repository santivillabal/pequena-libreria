import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {MiContexto} from "../Context/CartContext";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const {libros} = useContext(MiContexto)
    const {setLibros} = useContext(MiContexto)
    const [libroBuscado, setLibroBuscado] = useState();
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        if (libros.length > 0) {
            const select = libros.find(libro => libro.id == id);
            setLibroBuscado(select);
            setLoader(false);
        }
    }, [libros]);



    return (
        <>{
            loader ? <div>Cargando...</div> :
                <ItemDetail libro={libroBuscado} />
        }

        </>
    )

}

export default ItemDetailContainer