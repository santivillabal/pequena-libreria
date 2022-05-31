import React from "react";

function CartWidget(){
    return  <a>
                <i id="cart" class="fas fa-shopping-cart"></i>
                <span class ="cart-quantity">0</span>
            </a>
}

export default CartWidget;