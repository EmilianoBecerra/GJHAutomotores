import { useEffect, useState } from "react";
import "./Header.css"
import { Link, useNavigate, useParams } from "react-router-dom"

export function Header() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const location = window.location.pathname;

    function handleInputChange(e) {
        setInputValue(e.target.value);
        if (inputValue) {
            navigate(`/buscador/${e.target.value}`)
        }
    }

    useEffect(() => {
        if (!location.includes("buscador")) {
            setInputValue("");
        }
    }, [location])



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
                <input type="text" value={inputValue} placeholder="Buscar" id="buscador" onChange={handleInputChange} />
            </div>
        </header>
    )
}