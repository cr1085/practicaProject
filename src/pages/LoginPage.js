import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from '../firebase'; // Importa solo `auth` desde la configuración de Firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Importa módulos específicos de Firebase Auth
import { FaGoogle } from 'react-icons/fa'; // Importa el icono de Google
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  // Maneja el inicio de sesión con Google
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user); // Usuario autenticado
        navigate(routes.monitorias); // Redirige tras inicio de sesión exitoso
      })
      .catch((error) => {
        console.error("Error en la autenticación", error);
        setError("Error en la autenticación con Google: " + error.message); // Agregar detalles del error
      });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reiniciar mensaje de error
    if (!email || !password) {
      setError('Por favor, complete todos los campos');
      return;
    }
    try {
      await login(email, password, location.state?.from);
      navigate(routes.monitorias);
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    flexDirection: 'column',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const googleButtonStyle = {
    width: 'auto', // Ajusta al tamaño necesario
    padding: '8px 16px', // Haciendo el padding más pequeño
    backgroundColor: '#db4437', // Color de Google
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px', // Haciendo el tamaño de la fuente más pequeño
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'left',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  };

  const logoStyle = {
    marginBottom: '20px',
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <img src="/img/imglogin.png" alt="Logo" style={logoStyle} />
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        {error && <p style={errorStyle}>{error}</p>}
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
      </form>

      {/* Botón de inicio de sesión con Google */}
      <button onClick={handleGoogleLogin} style={googleButtonStyle}>
        <FaGoogle style={{ marginRight: '8px' }} /> Iniciar sesión con Google
      </button>
    </div>
  );
}
