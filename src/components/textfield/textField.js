import React from 'react';
import './textField.css';

export default function TextBox({
    inputName = "input-box",
    inputValue,
    type = "text",
    placeholder = "Enter value",
    handleChange = () => { '' },
    required = false,
}) {
    return (
        <div >
            <input
                name={inputName}
                value={inputValue}
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                className='input-field '
                required={required}
            />
        </div>
    );
}
