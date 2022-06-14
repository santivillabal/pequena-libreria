import React from "react";
import { Link } from "react-router-dom";

function CartWidget(){
    return  <Link to="/Carrito">
                <i id="cart" className="fas fa-shopping-cart"></i>
                <span className ="cart-quantity">0</span>
            </Link>
}

export default CartWidget;