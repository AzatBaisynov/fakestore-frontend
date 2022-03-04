import React from 'react';

const Input = ({name, type, handleChange, handleBlur, value, errorName, touchedName}) => {
    return (
        <div className="add__block">
            <label className="add__label" htmlFor={name}>{name}</label>
            <input
                className="add__input"
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />
            {errorName && touchedName && <p className="add__error">{errorName}</p>}
        </div>
    );
};

export default Input;