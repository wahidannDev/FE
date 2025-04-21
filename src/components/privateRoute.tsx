import { Navigate } from "react-router-dom"
import useAuthStore from "../store/useAuthStore"
import { ReactNode } from "react"

const PrivateRoute = ({ children }: { children: ReactNode}) => {
  const session = useAuthStore((state) => state.session)

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
