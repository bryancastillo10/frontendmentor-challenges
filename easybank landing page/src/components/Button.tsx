import { ReactNode } from "react";

interface ButtonProps{
  children: ReactNode;
}

const Button = ({children}:ButtonProps) => {
  return (
    <button className="border rounded-full px-6 py-2 main-gradient
    duration-500 ease-in-out hover:opacity-50
    border-none text-white font-medium font-sans">
      {children}
    </button>
  )
}

export default Button;
