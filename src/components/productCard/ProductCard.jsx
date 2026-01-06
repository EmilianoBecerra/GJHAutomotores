import "./ProductCard.css"
import { LinkButton } from "../Link/LinkButton"

export function ProductCard({ urlImg, modelo, anio }) {
    return (
        <div className="product">
            <div>
                <img src={urlImg} alt="un auto blanco" className="product-img" />
            </div>
            <p>{modelo}</p>
            <span>{anio}</span>
            <LinkButton size={13} text={"Ver mas"} url={"/Autos/Peugeot208/"} color={"black"} />
        </div>
    )
}