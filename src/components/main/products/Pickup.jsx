import { useEffect, useState } from "react"
import "./Pickup.css"
import { ProductCard } from "../products/productCard/ProductCard.jsx"
import { Loading } from "../../loading/Loading.jsx";
import { Error } from "../../error/Error.jsx";
import { InputFilter } from "../../inputFilter/InputFilter.jsx";
import { filtrarProductos } from "../../../utils/filtrarProductos.js";
import { FormBusqueda } from "../../formBusqueda/FormBusqueda.jsx";

export function Pickup() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buscador, setBuscador] = useState("");
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        const getPickUp = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Error al buscar los productos");
                const data = await response.json();
                setProductos(data);
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


    setTimeout(() => {
        if (buscador.length > 1) {
            setProductosFiltrados(filtrarProductos(buscador, productos));
        } else {
            setProductosFiltrados([]);
        }
    }, 200)


    const camionetas = productos.filter(producto => (producto.carroceria === "Camioneta"));

    return (
        <div>
            <div className="busqueda-box">
                <p><b>Busqueda Avanzada</b></p>
                <FormBusqueda
                    buscador={buscador}
                    setBuscador={setBuscador}
                />
            </div>
            <div className="container">
                {
                    buscador.length < 1 ?
                        camionetas.map(camioneta => {
                            const imgArray = camioneta.imgDetail ? camioneta.imgDetail.split(",") : [];
                            return (
                                <ProductCard
                                    urlImg={imgArray[0]}
                                    key={camioneta.id}
                                    brand={camioneta.marca}
                                    model={camioneta.modelo}
                                    fabricacion={camioneta.fabricacion}
                                    productId={camioneta.id}
                                    color={camioneta.color}
                                />
                            )
                        })
                        : productosFiltrados.map(camioneta => {
                            const imgArray = camioneta.imgDetail ? camioneta.imgDetail.split(",") : [];
                            return (
                                <ProductCard
                                    urlImg={imgArray[0]}
                                    key={camioneta.id}
                                    brand={camioneta.marca}
                                    model={camioneta.modelo}
                                    fabricacion={camioneta.fabricacion}
                                    productId={camioneta.id}
                                    color={camioneta.color}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}