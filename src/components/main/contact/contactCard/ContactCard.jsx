import "./ContactCard.css"

export function ContactCard({title, description}) {
    return (
        <div className="contact-card">
            <h3 className="title">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}