import React, { useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { MiContexto } from "../Context/CartContext";

const ItemListContainer = () => {
    const {libros} = useContext(MiContexto)

    return (
        <div>
            <ItemList libros={libros} />
        </div>
    )
}

export default ItemListContainer