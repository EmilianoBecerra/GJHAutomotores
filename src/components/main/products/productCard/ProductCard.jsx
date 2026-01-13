import "./ProductCard.css"
import { LinkButton } from "../../../Link/LinkButton.jsx"

export function ProductCard({ urlImg, model, fabricacion, productId, brand, color, type}) {
    return (
        <div className="productCard">
            <div className="div-img">
                <img src={urlImg} alt={color} className="product-img" />
            </div>
            <div className="div-info">
                <p>{`${brand} ${model}`}</p>
                <span>{fabricacion}</span>
                <LinkButton size={13} text={"Ver mas"} url={`/productos/${type}/${productId}`} color={"black"} />
            </div>
        </div>
    )
}