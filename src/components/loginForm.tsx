import supabase from "../lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";
import Input from "./input";
import toast from "react-hot-toast";
import Button from "./button";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const {
      session,
      email,
      password,
      message,
      setEmail,
      setPassword,
      setMessage,
      setUser,
      setSession,
      clearCredentials,
    } = useAuthStore();

    useEffect(() => {
      if (session) {
        navigate("/dashboard");
      }
    }, [session]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage;

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
          const { user, session } = data;
          setUser(user);
          setSession(session);
          clearCredentials();
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
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-1/2 p-8 h-[600px]">
        <div className="mb-12">
          <h1 className="text-[15px] font-bold text-purple-700 tracking-wide">
            <span className="text-black">medi</span>
            <span className="text-purple-600">verse</span>
          </h1>
        </div>  
          <h1 className="text-4xl font-bold mb-2 mt-14">{"Selamat Datang"}</h1>
          <p className="mb-12 text-gray-700">{"Masuk dan kelola dashboard Mediverse Anda sekarang"}</p>
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
                placeholder="Masukan email anda"
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
          <Link to="/register" className="underline flex justify-end">Lupa Kata Sandi?</Link>
          <div className="mt-6 flex justify-end">
          <Button 
            type="submit"
            title="MASUK SEKARANG"
            icon={<TbDoorExit />}
          />
          </div>
        </form>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rounded-md">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold">{ "Your Personal Healthcare Assistant"}</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginForm
