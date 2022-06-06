import React from "react";

function CartWidget(){
    return  <a>
                <i id="cart" className="fas fa-shopping-cart"></i>
                <span className ="cart-quantity">0</span>
            </a>
}

export default CartWidget;