import { useContext, useEffect, useState } from "react"
import "./Busqueda.css"
import { Loading } from "../../loading/Loading";
import { Error } from "../../error/Error";
import { globalContext } from "../../../context/context";
import { distanciaLeveshtein } from "../../../utils/distanciaLevenshtein.js";
import { ProductCard } from "../products/productCard/ProductCard.jsx";

export function Busqueda() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { buscador } = useContext(globalContext);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        const getFilterProductos = async () => {
            try {
                setLoading(true);
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Productos no encontrados");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Error al parsear los productos");
                }
                setProductos(data);
            } catch (error) {
                console.error("Hubo una falla al buscar los productos", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        setTimeout(() => {
            getFilterProductos();
        }, "100");

    }, [buscador]);

    if (loading) return <Loading />
    if (error) return <Error />

    /*  function buscarProducto(input, products, umbralMaximo = 2) {
         const inputNormalizado = input.toLowerCase().trim();
 
         if (inputNormalizado === "") return [];
 
         const coincidenciasExactas = products.filter(producto => {
             producto.marca.toLowerCase().includes(inputNormalizado) || producto.modelo.toLowerCase().includes(inputNormalizado);
         });
 
         if (coincidenciasExactas.length > 0) {
             return coincidenciasExactas;
         }
 
         const productosConDistancia = products.map(producto => ({
             ...producto,
             distancia: distanciaLeveshtein(inputNormalizado, producto.nombre)
         }))
 
         const coincidenciasAproximadas = productosConDistancia
             .filter(p => p.distancia <= umbralMaximo)
             .sort((a, b) => a.distancia - b.distancia);
 
         return coincidenciasAproximadas;
     } */

    return (
        <div className="filter-container">
            {
                /*  productos.map((product) => (
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
                 ) */
            }

        </div>
    )
}