import "./FeatureItem.css"

export function FeatureItem({ label, value, title, children }) {
    return (
        <>
            <div className="feature">
                {title && <p><b>{title}</b></p>}
                {label && <p>{label}</p>}
                {value && <p className="bold-info"><b>{value}</b></p>}
                {children}
            </div>
            <hr />
        </>
    )
}