import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { MiContexto } from "../Context/CartContext";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const {libros} = useContext(MiContexto)
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        if (libros.length > 0) {
            setLoader(false);
        }
    }, [libros]);

    return (
        <>{
            loader ? <Loader />
            :
            <ItemList libros={libros} />
        }</>
    )
}

export default ItemListContainer