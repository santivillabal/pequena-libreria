import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar(){

    const categorias = ["Ciencia ficción", "Comic", "Fantasía", "Juvenil", "Latinoamericana", "Novela histórica"]



    return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-cont">
        <Link className="navbar-brand" to="/Home"><img src="/assets/logo_peqlib.png" className="logo" alt="La pequeña librería"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-book"></i>
        </button>
        <div className="collapse navbar-collapse navlinkcontainer" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="barlink nav-link active menu-link" aria-current="page" to="/Home">INICIO</Link>
            <div className="dropdown menu-link">
              <button type="button" className="categorybtn btn-link nav-link active" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">CATEGORÍAS</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categorias.map(categoria =>(
                <li key={categoria}><Link className="dropdown-item barlist" to={`/category/${categoria}`}>{categoria}</Link></li>))}
              </ul>
            </div>
            <div className="cartWidget menu-link">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
)}

export default Navbar;