import "./CardFinancing.css"

export function CardFinancing({title, description, interest}) {
    return (
        <div className="card">
            <h2 className="titleCard">{title}</h2>
            <p className="descriptionCard">{description}</p>
            <p className="interestCard">{interest}</p>
        </div>
    )
}