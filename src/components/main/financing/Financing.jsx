
import { CardFinancing } from "./cardFinancing/CardFinancing.jsx"
import "./Financing.css"

export function Financing() {
    return (
        <div className="financing">
            <article>
                <h3 className="title">Tu próximo vehículo,<br /> más cerca que nunca.</h3>
                <p className="subtitle">Conocé nuestras opciones de financiación a medida y elegí la que mejor se adapte a tus posibilidades.</p>
            </article>
            <div className="cardsFinancing">
                <CardFinancing
                    title={"Cuotas Fijas en Pesos"}
                    description={"Financiamos hasta el 50% del valor de tu unidad en 12, 24 o 36 cuotas fijas. Sin sorpresas: sabés cuánto pagás desde el primer mes hasta el último."}
                    interest={"Tasa fija preferencial."}
                />
                <CardFinancing
                    title={"Créditos UVA / Tasa Variable"}
                    description={"Accedé a montos más altos con la cuota inicial más baja del mercado. Ideal para quienes buscan renovar su unidad con un desembolso mensual mínimo."}
                    interest={"Financiación de hasta el 70%."}
                />
                <CardFinancing
                    title={"Plan Canje (Llave por Llave)"}
                    description={"Tomamos tu usado como parte de pago al mejor precio del mercado. Entregás tu auto y te llevás el nuevo en el acto, sin quedarte a pie."}
                    interest={"Tasación inmediata."}
                />
            </div>
        </div>
    )
}