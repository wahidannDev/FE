import { useNavigate } from "react-router";
import supabase from "../lib/supabaseClient"
import useAuthStore from "../store/useAuthStore";


const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, setSession } = useAuthStore();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    setUser(null); 
    setSession(null);
    navigate("/login");
  };
  return (
    <div>
      <h1>{`Welcome, ${user?.email || 'User'} 👋`}</h1>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}

export default Dashboard
