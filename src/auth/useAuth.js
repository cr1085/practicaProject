import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Aquí solo se extraen las funciones y el estado del contexto
export default function useAuth() {
  return useContext(AuthContext);
}
