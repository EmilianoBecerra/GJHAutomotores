import "./Header.css"
import { Link } from "react-router-dom"
export function Header() {
    return (
        <header>
            <Link to={"/"} className="logo">
                <h1 className="title">GJH</h1>
                <h2 className="subTitle">Automotores</h2>
            </Link>

            <nav className="navBar">
                <ul>
                    <li><Link to={"/"} className="aNavBar">Inicio</Link></li>
                    <li><Link to={"/Autos/"} className="aNavBar">Autos</Link></li>
                    <li><Link to={"/Camionetas/"} className="aNavBar">Camionetas</Link></li>
                    <li><Link to={"/Planes/"} className="aNavBar">Planes y Financiación</Link></li>
                    <li><Link to={"/Nosotros/"} className="aNavBar">Nosotros</Link></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Buscar" />
            </div>
        </header>
    )
}