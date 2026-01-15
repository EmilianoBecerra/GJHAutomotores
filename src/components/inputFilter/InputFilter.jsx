import "./InputFilter.css";

export function InputFilter({type, value, setBuscador}) {
    
    function handleInputChange(e) {
        const char = e.target.value;
        setBuscador(char);
    }

    return (
        <div className="busqueda-personalizada">
            <input type={type} value={value} onChange={handleInputChange} placeholder="Ingresa Marca o Modelo"/>
        </div>
    )
}