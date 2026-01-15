
import "./Error.css"

export function Error({ tipoError }) {
    return (
        <div className="error">
            <p>Error al buscar los {tipoError}.</p>
        </div>
    )
}