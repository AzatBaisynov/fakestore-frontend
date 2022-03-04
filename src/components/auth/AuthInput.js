import React from 'react';

const AuthInput = ({className, type, placeholder, field, setInfo, info}) => {

    const handleInput = (e) => {
        const fields = {
            ...info,
            [field] : e.target.value
        }
        setInfo(fields)
    }

    return (
        <div className={className}>
            <label htmlFor={placeholder}/>
            <input
                id={placeholder}
                type={type}
                placeholder={placeholder}
                onInput={handleInput}
            />
        </div>

    )
};

export default AuthInput;