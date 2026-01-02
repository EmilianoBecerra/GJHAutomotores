import "./Header.css"
import React from "react"
export function Header () {
    return(
        <div className="header">
            <div className="Logo">
                <h1 className="title">GH</h1>
                <h2 className="subTitle">Automotores</h2>
            </div>
            <div className="navBar">
                <a href="">Autos</a>
                <a href="">Camionetas</a>
                <a href="">Motocicletas</a>
                <a href="">Planes y facilidades</a>
                <a href="">Nosotros</a>
            </div>
            <div className="search">
                <input type="text"  placeholder="Buscar"/>
            </div>
        </div>
    )
}