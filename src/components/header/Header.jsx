import { useContext, useEffect, useEffectEvent, useState } from "react";
import "./Header.css"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { globalContext } from "../../context/context";

export function Header() {
    const { setBuscador, buscador } = useContext(globalContext);
    const navigate = useNavigate();
    const location = useLocation();

    function handleInputChange(e) {
        setBuscador(e.target.value);
    }

    useEffect(() => {
        if (buscador.length >= 2) {
            setTimeout(() => {
                navigate("/buscador")
            }, 200)
        }

    }, [buscador])

    return (
        <header>
            <Link to={"/"} className="logo">
                <img src="./logo.png" alt="logo empresa" className="logo" />
            </Link>

            <nav className="navBar">
                <ul>
                    <li><Link to={"/"} className="aNavBar">Inicio</Link></li>
                    <li><Link to={"/productos/autos"} className="aNavBar">Autos</Link></li>
                    <li><Link to={"/productos/camionetas"} className="aNavBar">Camionetas</Link></li>
                    <li><Link to={"/planes/"} className="aNavBar">Planes y Financiación</Link></li>
                    <li><Link to={"/nosotros/"} className="aNavBar">Nosotros</Link></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" value={buscador} placeholder="Buscar" id="buscador" onChange={handleInputChange} />
            </div>
        </header>
    )
}