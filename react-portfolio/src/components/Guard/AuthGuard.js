import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const AuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthGuard;

