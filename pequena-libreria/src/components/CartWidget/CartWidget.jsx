import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../Context/CartContext";


function CartWidget(){
    const {itemQty} = useContext(MiContexto)

    return  <Link to="/cart">
                <i id="cart" className="cart-icon fas fa-shopping-cart"></i>
                <span className="cart-quantity">{itemQty() > 0 ? itemQty() : ""}</span>
            </Link>
}

export default CartWidget;