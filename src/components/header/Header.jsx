import "./Header.css"
import { Link } from "react-router-dom"
export function Header() {
    return (
        <div className="header">
            <Link to={"/GHAutomotores/"} className="logo">
                <h1 className="title">GH</h1>
                <h2 className="subTitle">Automotores</h2>
            </Link>

            <nav className="navBar">
                <ul>
                    <li><Link to={"/GHAutomotores/Autos/"} className="Link">Autos</Link></li>
                    <li><Link to={"/GHAutomotores/Camionetas/"} className="Link">Camionetas</Link></li>
                    <li><Link to={"/GHAutomotores/Motos/"} className="Link">Motos</Link>  </li>
                    <li><Link to={"/GHAutomotores/Planes/"} className="Link">Planes y facilidades</Link></li>
                    <li><Link to={"/GHAutomotores/Nosotros/"} className="Link">Nosotros</Link></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Buscar" />
            </div>
        </div>
    )
}