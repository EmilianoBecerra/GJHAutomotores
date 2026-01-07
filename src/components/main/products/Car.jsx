import "./Car.css"
import {ProductCard} from "../products/productCard/ProductCard.jsx"
import { useEffect, useState } from "react";

export function Car() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCars = async () => {
            try {
                const response = await fetch("https://api.sheetbest.com/sheets/0e184cfb-d13d-416a-a41c-47396ed90ad1");
                if (!response.ok) throw new Error("Error en el servidor");
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error("Hubo una falla", error);
            };

        }
        getCars()
    }, [])

    return (
        <div className="container">
           {
            cars.map((car) => (
                car.type === "Auto" ?
                <ProductCard 
                    urlImg={car.img} 
                    key={car.id}
                    brand={car.marca}
                    model={car.nombre}
                    anio={car.anio}
                    productId={car.id}
                    color={car.color}
                /> : null
            ))
           }
        </div>
    )
}