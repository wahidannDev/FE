import { useState } from "react"
import supabase from "../lib/supabaseClient";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";
import Input from "./input";
import AuthCard from "./authCard";
import toast from "react-hot-toast";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            toast("Email sudah ada!", {
                icon: "❌",
                style: {
                  background: "#dc2626",
                  color: "#fff",
                },
              });
            setMessage(error.message);
            return
        }

        if (data) {
            toast("Berhasil daftar ke Mediverse 🎉", {
                icon: "🚀",
                duration: 4000,
                style: {
                  borderRadius: '10px',
                  background: '#9333EA',
                  color: '#fff',
                  padding: '12px 16px',
                  fontWeight: '500',
                },
              });
            setMessage("User account created")
        }

        setEmail("");
        setPassword("");
    }

  return (
        <AuthCard title="Register" description="Daftar Mediverse Anda sekarang">
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label className="block text-black font-bold mb-2">Email</label>
               {message && <span>{message}</span>}
               <div className="relative">
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                   <MdOutlineMail />
                 </span>
                 <Input
                    type="email"
                    placeholder="Masukan email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={<MdOutlineMail />}
                />
               </div>
             </div>
             <div className="mb-4">
               <label className="block text-black font-bold mb-2">Kata Sandi</label>
               <div className="relative">
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                   <IoKeyOutline />
                 </span>
                 <Input
                    type="password"
                    placeholder="Masukan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={<IoKeyOutline />}
                />
               </div>
             </div>
             <Link to="rest/v1/register" className="underline flex justify-end">Lupa Kata Sandi?</Link>
             <div className="mt-6 flex justify-end">
               <button 
                 type="submit"
                 className="py-2 px-8 text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center space-x-2"
               >
                 <span>DAFTAR</span>
                 <TbDoorExit />
               </button>
             </div>
           </form>
           <span className="flex justify-center mt-20">SUdah punya akun?... 
             <Link to="rest/v1/login" className="underline text-purple-600">Login</Link>
           </span>
        </AuthCard>
  )
}

export default RegisterForm 
