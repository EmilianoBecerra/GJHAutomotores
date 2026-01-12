import "./Contact.css"
import { ContactCard } from "./contactCard/contactCard"

export function Contact() {
    const props = [{
        title: "Transparencia Total",
        description: "Cada unidad en nuestro inventario atraviesa una rigurosa inspección técnica y estética antes de salir a la venta. Documentación al día y lista para transferir."
    },
    {
        title: "Atención Personalizada",
        description: "No creemos en soluciones estándar. Escuchamos tus necesidades para ofrecerte el vehículo y el plan de pago que realmente te conviene."
    },
    {
        title:"Respaldo Post-Venta",
        description:"Nuestra relación no termina cuando te llevas las llaves. Estamos para acompañarte en cada kilómetro con asesoramiento y soporte continuo."
    }
    ]

    return (
        <div className="contact">
            <h2 className="title">Nosotros</h2>
            <article className="contact-description">
                En <b>GH Automotores</b>, nacimos con una misión clara: transformar la experiencia de compra de vehículos en un proceso transparente, ágil y personalizado. Con más de 10 años de trayectoria en el mercado, nos hemos consolidado como referentes gracias a nuestra pasión por los fierros y nuestro compromiso con cada cliente.

                Entendemos que un auto no es solo un medio de transporte; es un proyecto, una herramienta de trabajo o el sueño de una familia. Por eso, no solo vendemos autos: conectamos personas con sus metas.
            </article>
            <div className="cards">
                {
                    props.map((prop, index) => <ContactCard title={prop.title} key={index} description={prop.description} />)
                }
            </div>

        </div>
    )

}