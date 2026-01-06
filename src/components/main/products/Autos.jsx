import "./Autos.css"
import { ProductCard } from "../../productCard/ProductCard"
import { useEffect, useState } from "react";

export function Autos() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const solicitud = async () => {
            try {
                const response = await fetch("https://650af169dfd73d1fab093f01.mockapi.io/api/products");
                if (!response.ok) throw new Error("Error en el servidor");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Hubo una falla", error);
            };

        }
        solicitud()
    }, [])
    
    console.log(products)
    return (
        <div className="container">
           {
            products.map((car) => (
                <ProductCard urlImg={car.img} key={car.id} modelo={car.name} anio={car.id}/>
            ))
           }
        </div>
    )
}