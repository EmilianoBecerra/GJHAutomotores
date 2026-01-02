import "./Main.css"
import React from "react"

export function Main (){
    return(
        <div className="main">
            <div className="box-quienesSomos">
                <h3>Quienes Somos</h3>
            <article>
                En <b>GH Automotores</b>, no solo vendemos autos; conectamos personas con sus metas y aventuras. Con años de trayectoria en el mercado automotriz, nos hemos consolidado como el referente de confianza para quienes buscan renovar su vehículo o adquirir su primer coche con total seguridad.
            </article>
            <a href="">Conocenos</a>
            </div>
            <div className="box-propuestas">
                  <h3>Nuestra Propuesta de Valor</h3>
            <article>
                Sabemos que comprar un vehículo es una decisión importante. <p>Por eso, ofrecemos un servicio integral basado en la transparencia y la calidad</p>
                <ul>
                    <li>Autos Seleccionados</li>
                    <p>Cada unidad usada de nuestro inventario atraviesa una rigurosa inspección técnica y estética antes de salir a la venta.</p>
                    <li>Garantía de Confianza</li>
                    <p>Todos nuestros vehículos cuentan con documentación al día y verificación mecánica garantizada.</p>
                    <li>Nuevos 0km</li>
                    <p> Trabajamos con las principales marcas del mercado para ofrecerte los últimos lanzamientos con entrega inmediata.</p>
                    <li>Tomamos tu Usado</li>
                    <p>Tasamos tu vehículo actual al mejor precio del mercado para que entregarlo sea parte de tu pago.
                    </p>
                </ul>
     
            </article>

            </div>
          



        </div>
    )
}