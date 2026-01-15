import { filtrarProductos } from "../../../../utils/filtrarProductos.js";
import { Error } from "../../../error/Error";
import { FormBusqueda } from "../../../searchForm/SearchForm.jsx";
import { Loading } from "../../../loading/Loading";
import { ProductCard } from "../productCard/ProductCard.jsx";
import "./AllProducts.css";
import { useEffect, useState } from "react";
import { ProductVisualization } from "../../../error/ProductVisualization.jsx";

export function AllProducts() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buscador, setBuscador] = useState("")
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const params = window.location.pathname;
    const paramsArray = params.split("/");
    const tipoProducto = paramsArray[paramsArray.length - 1];
    useEffect(() => {
        const getProductos = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_BASE_URL);
                if (!response.ok) throw new Error("Productos no encontrados");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Error al buscar los productos");
                }
                setProductos(data);
            } catch (error) {
                console.error("Hubo una falla", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getProductos();
    }, [])

    const arrayTipoProducto = productos.filter(producto => (producto.carroceria === tipoProducto));

    useEffect(() => {
        if (buscador.length >= 1) {
            const arrayFiltrado = filtrarProductos(buscador, arrayTipoProducto);
            setProductosFiltrados(arrayFiltrado);
        } else {
            setProductosFiltrados([])
        }
    }, [buscador, productos, tipoProducto]);

    const layout = buscador.length >= 1 && productosFiltrados.length === 0
        ? "sin-productos"
        : "container";

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error tipoError={"productos"}/>
    }

    return (
        <div className="productos">
            <div className="busqueda-box">
                <FormBusqueda
                    buscador={buscador}
                    setBuscador={setBuscador}
                />
            </div>
            <div className={layout}>
                {
                    buscador.length < 1 ?
                        arrayTipoProducto.map(product => {
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
                                    type={tipoProducto}
                                />
                            )
                        })
                        : productosFiltrados.length > 0 ?
                            productosFiltrados.map((product, index) => {
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
                                        type={tipoProducto}
                                    />
                                )
                            }) :
                            <ProductVisualization />
                }
            </div>
        </div>
    )
}