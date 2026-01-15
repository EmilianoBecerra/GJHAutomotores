import { InputFilter } from "../inputFilter/InputFilter";
import "./SearchForm.css";


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