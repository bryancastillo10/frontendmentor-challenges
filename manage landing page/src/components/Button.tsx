import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="bg-brightRed shadow-lg
     px-6 py-2 rounded-full font-bold text-veryLightGray"
    >
      {children}
    </button>
  );
};

export default Button;
