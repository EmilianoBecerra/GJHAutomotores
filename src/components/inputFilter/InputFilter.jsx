import "./InputFilter.css";

export function InputFilter({type, value, setBuscador}) {
    
    function handleInputChange(e) {
        const char = e.target.value;
        setBuscador(char);
    }

    return (
        <div className="inputAgrupados">
            {/* <label htmlFor={label}>{label}</label> */}
            <input type={type} value={value} onChange={handleInputChange}/>
        </div>
    )
}