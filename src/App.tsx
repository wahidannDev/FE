
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
  

function App() {
  return (
    <BrowserRouter>
    <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        {/* home */}
        <Route 
          path="/"
          element={<Home/>}
        /> 
      
         {/* login */}
         <Route 
          path="/rest/v1/login" 
          element={<Login/>}
        />
        
        {/* register */}
        <Route 
          path="/rest/v1/register"
          element={<Register/>}
          />
  
        {/* dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
             
      </Routes>
    </BrowserRouter>
  )
}

export default App
