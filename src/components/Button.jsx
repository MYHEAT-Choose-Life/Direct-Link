import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-4 w-full rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
