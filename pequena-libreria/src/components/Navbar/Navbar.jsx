import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar(){

    const categorias = ["Ciencia ficción", "Comic", "Fantasía", "Juvenil", "Latinoamericana", "Novela histórica"]



    return (
    <nav className="navbar navbar-expand-lg" style="background-color: #fffcd2">
      <div className="container-fluid navbar-cont">
        <Link className="navbar-brand" to="/Home"><img src="/assets/logo_peqlib.png" alt="La pequeña librería"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
            <Link className="nav-link active" to="/Novedades">Novedades</Link>
            <div className="dropdown">
              <button type="button" className="categorybtn nav-link active" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Categorías</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categorias.map(categoria =>(
                <li key={categoria}><Link className="dropdown-item" to={`/category/${categoria}`}>{categoria}</Link></li>))}
              </ul>
            </div>
            <div className="cartWidget">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
)}

export default Navbar;