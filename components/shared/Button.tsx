import React from 'react';
import { classNames } from '../utils/helpers';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        'rounded-md px-4 py-2 text-sm font-medium',
        disabled
          ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;