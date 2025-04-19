import { ReactNode } from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
}
const Input = ({ value, onChange, type = "text", placeholder = "", icon }: InputProps) => {
    return (
        <div className="relative w-full">
          {icon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              {icon}
            </span>
          )}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      );
  };
  
  export default Input;
