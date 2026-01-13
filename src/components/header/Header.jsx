import "./Header.css"
import { Link} from "react-router-dom"

export function Header() {
    return (
        <header>
            <Link to={"/"} className="logo">
                <img src="/logo.png" alt="logo empresa" className="logo" />
            </Link>

            <nav className="navBar">
                <ul>
                    <li><Link to={"/"} className="aNavBar">Inicio</Link></li>
                    <li><Link to={"/productos/auto"} className="aNavBar">Autos</Link></li>
                    <li><Link to={"/productos/camioneta"} className="aNavBar">Camionetas</Link></li>
                    <li><Link to={"/planes/"} className="aNavBar">Planes y Financiación</Link></li>
                    <li><Link to={"/nosotros/"} className="aNavBar">Nosotros</Link></li>
                </ul>
            </nav>
        </header>
    )
}