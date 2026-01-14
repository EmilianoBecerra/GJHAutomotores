import { InputFilter } from "../inputFilter/InputFilter";
import "./FormBusqueda.css";


export function FormBusqueda({ buscador, setBuscador }) {
    return (
        <form action="" className="formulario">
            <InputFilter
                type={"text"}
                value={buscador}
                setBuscador={setBuscador}
            />
        </form>
    )
}