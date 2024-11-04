import React from 'react';
import { classNames } from '../utils/helpers';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className, imageSrc }) => {
  return (
    <div
      className={classNames(
        'bg-white shadow-md rounded-lg p-4',
        className
      )}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title || 'Card Image'}
          className="w-full rounded-t-lg"
        />
      )}
      {title && (
        <h2 className="text-xl font-bold mb-2">{title}</h2>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default Card;