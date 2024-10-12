import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const CambiarContraseña = ({ redirectToMenu }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    // Aquí podrías hacer la llamada a la API para cambiar la contraseña
    // Si es exitosa, podrías mostrar un mensaje de éxito
    setMessage('Contraseña cambiada con éxito');
    // Reiniciar el formulario
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'black',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid black',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'white',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0',
  };

  const homeButtonStyle = {
    width: '150px',
    margin: '15px',
    padding: '10px 0',
    backgroundColor: '#FFA500', // Color amarillo-naranja
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '40px' // Espacio adicional debajo del botón
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: 'black' }}>Cambiar Contraseña</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Contraseña Actual:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Nueva Contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Confirmar Nueva Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <Button type="submit" style={buttonStyle}>Cambiar Contraseña</Button>
      </form>
      {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
      <Button onClick={() => redirectToMenu('profile')} style={homeButtonStyle}>Ir Mi Cuenta</Button>
    </div>
  );
};

export default CambiarContraseña;
