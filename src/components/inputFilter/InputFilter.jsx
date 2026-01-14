import "./InputFilter.css";

export function InputFilter({type, value, setBuscador}) {
    
    function handleInputChange(e) {
        const char = e.target.value;
        setBuscador(char);
    }

    return (
        <div className="inputAgrupados">
            <input type={type} value={value} onChange={handleInputChange} placeholder="Busca por modelo, marca, año o kilometros"/>
        </div>
    )
}