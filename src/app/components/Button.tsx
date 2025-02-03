import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[328px]  min-h-[56px] bg-button text-white rounded-[48px]  transition-opacity duration-300 ease-in-out active:opacity-70"
    >
      {label}
    </button>
  );
};

export default Button;
