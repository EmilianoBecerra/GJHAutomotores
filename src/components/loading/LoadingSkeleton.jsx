
import "./LoadingSkeleton.css";

export function LoadingSkeleton() {
    return (
        <div className="loading-skeleton">
            <div className="l-skeleton">
                <h2>Cargando...</h2>
                <p>Cargando...</p>
                <p>Cargando...</p>
            </div>
            <div className="l-skeleton">
                <h2>Cargando...</h2>
                <p>Cargando...</p>
                <p>Cargando...</p>
            </div>
            <div className="l-skeleton">
                <h2>Cargando...</h2>
                <p>Cargando...</p>
                <p>Cargando...</p>
            </div>
        </div>
    )
}