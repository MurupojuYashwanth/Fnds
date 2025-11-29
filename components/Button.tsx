import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-teal hover:bg-teal-700 focus:ring-teal-500",
    secondary: "border-transparent text-brand-dark bg-brand-light hover:bg-teal-100 focus:ring-teal-300",
    outline: "border-2 border-brand-teal text-brand-teal bg-transparent hover:bg-teal-50 focus:ring-teal-500",
    accent: "border-transparent text-white bg-brand-orange hover:bg-orange-700 focus:ring-orange-500 font-bold"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;