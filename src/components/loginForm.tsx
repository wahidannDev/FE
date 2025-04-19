import supabase from "../lib/supabaseClient";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";
import Input from "./input";
import AuthCard from "./authCard";
import toast from "react-hot-toast";
import Button from "./button";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,

        });

        if (error) {
            toast("Email atau password salah!", {
                icon: "❌",
                style: {
                  background: "#dc2626",
                  color: "#fff",
                },
              });
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return
        }

        if (data) {
            toast("Berhasil login ke Mediverse 🎉", {
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
            navigate("/dashboard")
            return null;
        }
    }
  return (
    <AuthCard title="Selamat Datang" description="Masuk dan kelola dashboard Mediverse Anda sekarang">
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
                />
            </div>
          </div>
          <Link to="rest/v1/register" className="underline flex justify-end">Lupa Kata Sandi?</Link>
          <div className="mt-6 flex justify-end">
          <Button 
            type="submit"
            title="MASUK SEKARANG"
            icon={<TbDoorExit />}
          />
          </div>
        </form>
        
        <span className="flex justify-center mt-20">Tidak punya akun?... 
          <Link to="rest/v1/register" className="underline text-purple-600">Register</Link>
        </span>
  </AuthCard>
  )
}

export default LoginForm
