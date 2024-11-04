import React, { useState } from 'react';
import { classNames } from '../utils/helpers'; 

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  className,
  disabled,
  required,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event); // Notify parent component about changes
  };

  return (
    <div className={classNames('mb-4', className)}>
      {label && (
        <label htmlFor={label} className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={classNames(
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          error ? 'border-red-500' : 'border-gray-400', // Add error styling
          disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-white',
          className
        )}
        disabled={disabled}
        required={required}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Input;