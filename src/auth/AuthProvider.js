import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import roles from "../helpers/roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const navigate = useNavigate(); // Cambia useHistory por useNavigate
    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {
        setUser({ id: 1, name:'Jesus',email:'jesus.villarreal@cecar.edu.co', role: roles.regular }); // Simulación de inicio de sesión
        if (fromLocation) {
            navigate(fromLocation, { replace: true }); // Usa navigate para redirigir
        }
    };

    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
