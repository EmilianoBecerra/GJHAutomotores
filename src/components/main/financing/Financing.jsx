
import { useEffect, useState } from "react"
import { CardFinancing } from "./cardFinancing/CardFinancing.jsx"
import "./Financing.css"
import { Loading } from "../../loading/Loading.jsx";
import { Error } from "../../error/Error.jsx";
import { LoadingSkeleton } from "../../loading/LoadingSkeleton.jsx";

export function Financing() {

    const [planes, setPlanes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPlanes = async () => {
            try {
                setLoading(true);
                const response = await fetch(import.meta.env.VITE_API_PLANES_URL);
                if (!response) throw new Error("Planes no encontrados");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Error al buscar los productos");
                }
                setPlanes(data);
            } catch (error) {
                console.error("Error al solicitar planes", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getPlanes();
    }, [])

    //if (loading) return <LoadingSkeleton />
    if (error) return <Error tipoError={"Planes"}/>
    return (
        <div className="financing">
            <article>
                <h3 className="title">Tu próximo vehículo,<br /> más cerca que nunca.</h3>
                <p className="subtitle">Conocé nuestras opciones de financiación a medida y elegí la que mejor se adapte a tus posibilidades.</p>
            </article>
            <div className="cardsFinancing">
                {
                    loading ? <LoadingSkeleton /> :
                        planes.map(plan => (
                            <CardFinancing
                                title={plan.titulo}
                                description={plan.descripcion}
                                interest={plan.intereses}
                            />
                        ))
                }
            </div>
        </div>
    )
}