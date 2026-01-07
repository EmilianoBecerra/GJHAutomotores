import "./ProductCard.css"
import { LinkButton } from "../../../Link/LinkButton.jsx"

export function ProductCard({ urlImg, model, anio, productId, brand, color }) {
    return (
        <div className="productCard">
            <div className="div-img">
                <img src={urlImg} alt={color} className="product-img" />
            </div>
            <div className="div-info">
                <p>{`${brand} ${model}`}</p>
                <span>{anio}</span>
                <LinkButton size={13} text={"Ver mas"} url={productId} color={"black"} />
            </div>
        </div>
    )
}