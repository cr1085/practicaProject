import React, { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth"; 
import routes from "../helpers/routes";
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Para manejar redirección desde un lugar específico
  const { register } = useAuth(); // Asegúrate de que register esté disponible desde useAuth.

  // Función para verificar si el correo ya está registrado en Firebase
  const checkEmailInUse = async (email) => {
    const auth = getAuth();
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      return methods.length > 0; // Si el array tiene elementos, el correo ya está registrado
    } catch (error) {
      console.error('Error al verificar el correo', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reiniciar mensaje de error

    // Verificar si los campos están vacíos
    if (!email || !password || !confirmPassword) {
      setError('Por favor, complete todos los campos');
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Verificar si el correo electrónico ya está registrado
    const isEmailInUse = await checkEmailInUse(email);
    if (isEmailInUse) {
      setError('El correo electrónico ya está en uso');
      return;
    }

    try {
      // Intentar registrar al usuario
      await register(email, password); 
      navigate(routes.monitorias); // Redirigir después de un registro exitoso
    } catch (err) {
      // Manejar el error si ocurre durante el registro
      if (err.code === 'auth/email-already-in-use') {
        setError('El correo electrónico ya está registrado');
      } else {
        setError('Error al registrarse');
      }
    }
  };

  // Estilos proporcionados
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
        <h1>Registrar Cuenta</h1>
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
        <div>
          <label style={labelStyle}>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Registrar</button>
      </form>
    </div>
  );
}