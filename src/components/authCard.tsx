import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  sideTitle?: string;
}

const AuthCard = ({ title, description, children, sideTitle }: AuthCardProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          {description && <p className="mb-12 text-gray-700">{description}</p>}
          {children}
        </div>

        <div className="w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rounded-md">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold">{sideTitle || "Your Personal Healthcare Assistant"}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
