import { ReactNode } from "react";
 
interface ButtonProps {
    type?: "button" | "submit" | "reset";
    icon?: ReactNode;
    title: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({type, icon, title, className, onClick}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-8 text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center space-x-2 ${className}`}
    >
       <span>{title}</span>
      {icon}
    </button>
  )
}

export default Button
