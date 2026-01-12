import "./Car.css"
import { ProductCard } from "../products/productCard/ProductCard.jsx"
import { useEffect, useState } from "react";
import { Loading } from "../../loading/Loading.jsx";
import { Error } from "../../error/Error.jsx";

export function Car() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const getCars = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Productos no encontrados");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Error al buscar los productos");
                }
                setCars(data);
            } catch (error) {
                console.error("Hubo una falla", error);
                setError(error);
            } finally {
                setLoading(false);

            }
        }
        getCars();
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }


    return (
        <div className="container">
            {
                cars.map((car) => {
                    const imgArray = car.imgDetail ? car.imgDetail.split(",") : [];
                    return (
                        car.carroceria === "Auto" ?
                            <ProductCard
                                urlImg={imgArray[0]}
                                key={car.id}
                                brand={car.marca}
                                model={car.modelo}
                                fabricacion={car.fabricacion}
                                productId={car.id}
                                color={car.color}
                            /> : null
                    )
                })
            }
        </div>
    )
}