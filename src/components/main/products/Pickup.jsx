import { useEffect, useState } from "react"
import "./Pickup.css"
import { ProductCard } from "../products/productCard/ProductCard.jsx"
import { Loading } from "../../loading/Loading.jsx";
import { Error } from "../../error/Error.jsx";

export function Pickup() {
    const [pickUps, setPickUps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPickUp = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Error al buscar los productos");
                const data = await response.json();
                setPickUps(data);
            } catch (error) {
                console.log("Hubo uno falla", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getPickUp()
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className="container">
            {
                pickUps.map((pickup) => {
                    const imgArray = pickup.imgDetail ? pickup.imgDetail.split(",") : [];
                    return (
                        pickup.carroceria === "Camioneta" ?
                            <ProductCard
                                urlImg={imgArray[0]}
                                key={pickup.id}
                                brand={pickup.marca}
                                model={pickup.modelo}
                                fabricacion={pickup.fabricacion}
                                productId={pickup.id}
                                color={pickup.color}
                            />
                            : null
                    )
                })
            }
        </div>
    )
}