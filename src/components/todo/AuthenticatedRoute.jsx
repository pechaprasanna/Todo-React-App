import { Navigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()

    if(authContext.isAuthenticated) 
        return children
    return <Navigate to="/" />
}

export default AuthenticatedRoute