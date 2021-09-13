import React from 'react';
import './Input.scss'

const Input = ({value,onChange,error,placeholder,touched,type}) => {
    return (
        <div className="input">
              <input type={type}
                        className="input__input" 
                        value={value} 
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    {touched && error && 
                    <div className="input__error">
                        {error}
                    </div>
                    }
        </div>
    );
};

export default Input;