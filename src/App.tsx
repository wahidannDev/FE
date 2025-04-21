
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <BrowserRouter>
    <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
         <Route 
          path="/login" 
          element={<Login/>}
        />
        <Route 
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
