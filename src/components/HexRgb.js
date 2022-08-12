import React, {useState} from "react";
import './HexRgb.css'

function HexRgb() {
    const [label, setLabel] = useState('test');

    const handleChange = e => {
        const value = e.target.value;
        if (value.length !== 7) return;
        
        
    }
    return (
       <form className="form">
        <input className="input" type="text" onChange={handleChange}/>
        <label className="label">{label}</label>
       </form> 
    )
}

export default HexRgb;