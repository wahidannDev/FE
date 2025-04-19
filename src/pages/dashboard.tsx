import { useNavigate } from "react-router";
import supabase from "../lib/supabaseClient"
import { useEffect, useState } from "react";


const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUserEmail = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error getting user:", error.message);
        return;
      }
      setEmail(data?.user?.email || "Unknown User");
    };

    getUserEmail();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/rest/v1/login");
  };
  return (
    <div>
      <h1>{`Welcome to dashboard ${email}`}</h1>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}

export default Dashboard
