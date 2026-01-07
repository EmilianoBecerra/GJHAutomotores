import { useEffect, useState } from "react"
import "./Pickup.css"
import {ProductCard} from "../products/productCard/ProductCard.jsx"

export function Pickup() {
    const [pickUps, setPickUps] = useState([])

    useEffect(() => {
        const getPickUp = async () => {
            try {
                const response = await fetch("https://api.sheetbest.com/sheets/0e184cfb-d13d-416a-a41c-47396ed90ad1");
                if(!response.ok) throw new Error("Error en el servidor");
                const data = await response.json();
                setPickUps(data);
            } catch (error) {
                console.log("Hubo uno falla", error);
            }
        }
        getPickUp()
    }, [])
    return (
        <div className="container">
            {
                pickUps.map((pickup) => (
                    pickup.type === "Camioneta" ?
                <ProductCard
                    urlImg={pickup.img} 
                    key={pickup.id}
                    brand={pickup.marca}
                    model={pickup.nombre}
                    anio={pickup.anio}
                    productId={pickup.id}
                    color={pickup.color}
                />
                    : null
                ))
            }
        </div>
    )
}