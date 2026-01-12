import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../products/productCard/ProductCard"
import "./Busqueda.css"
import { Loading } from "../../loading/Loading";
import { Error } from "../../error/Error";
import { globalContext } from "../../../context/context";

export function Busqueda() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { buscador } = useContext(globalContext);

    useEffect(() => {
        const getFilterProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Productos no encontrados");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Error al parsear los productos");
                }
                setProducts(data);
            } catch (error) {
                console.error("Hubo una falla al buscar los productos", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        setTimeout(() => {
            getFilterProducts();
        }, "100");

    }, []);

    if (loading) return <Loading />
    if (error) return <Error />

    const buscadorCaseInsensitive = buscador.toLowerCase();

    return (
        <div className="filter-container">
            {
                products.map((product) => {
                    if (product.marca.toLowerCase().includes(buscadorCaseInsensitive) || product.modelo.toLowerCase().includes(buscadorCaseInsensitive)) {
                        const imgArray = product.imgDetail ? product.imgDetail.split(",") : [];
                        return (
                            <ProductCard
                                urlImg={imgArray[0]}
                                key={product.id}
                                brand={product.marca}
                                model={product.modelo}
                                fabricacion={product.fabricacion}
                                productId={product.id}
                                color={product.color}
                            />
                        )
                    }
                })
            }

        </div>
    )
}