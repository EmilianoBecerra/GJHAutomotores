import "./LinkButton.css"
import { Link } from "react-router-dom"

export function LinkButton({ text, url, color, size }) {
    return (

        <Link to={url} style={{ color: color, fontSize:size}} className="link">{text}</Link>

    )
}