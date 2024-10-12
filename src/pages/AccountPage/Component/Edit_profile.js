import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Importa Button desde react-bootstrap

const EditarPerfil = ({ user, redirectToMenu }) => { // Añadir redirectToMenu como prop
  const [emailVisibility, setEmailVisibility] = useState('visible');
  const [profileImage, setProfileImage] = useState(null);
  const [description, setDescription] = useState('');

  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white', // Fondo blanco
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
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
    color: 'black', // Texto de etiquetas en negro
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid black', // Borde negro
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'white', // Fondo blanco para los inputs
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px', // Altura para el cuadro de texto
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'black', // Fondo negro para el botón
    color: 'white', // Texto del botón en blanco
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const homeButtonStyle = {
    width: '200px', // Ajuste al ancho del botón
    margin: '20px auto', // Centrar el botón y añadir espacio
    backgroundColor: '#FFA500', // Color amarillo-naranja
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block', // Para asegurar que se centre
  };

  const handleImageChange = (event) => {
    setProfileImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleEmailVisibilityChange = (event) => {
    setEmailVisibility(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: 'black' }}>Editar Perfil</h2>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Nombre:</label>
          <input
            type="text"
            defaultValue={user.name}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            defaultValue={user.email}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Visibilidad del Correo Electrónico:</label>
          <select
            value={emailVisibility}
            onChange={handleEmailVisibilityChange}
            style={inputStyle}
          >
            <option value="visible">Visible para los participantes en el curso</option>
            <option value="hidden">Oculto</option>
            <option value="visibleToAll">Visible para todos</option>
          </select>
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Número de Identidad/C.C:</label>
          <input
            type="text"
            defaultValue={user.identityNumber}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Zona Horaria:</label>
          <select
            defaultValue={user.timezone}
            style={inputStyle}
          >
            <option value="America/Bogotá">Zona horaria del servidor (América/Bogotá)</option>
            <option value="America/New_York">Zona horaria del servidor (América/New_York)</option>
            <option value="America/Los_Angeles">Zona horaria del servidor (América/Los_Angeles)</option>
            <option value="Europe/London">Zona horaria del servidor (Europa/Londres)</option>
            <option value="Asia/Tokyo">Zona horaria del servidor (Asia/Tokyo)</option>
            {/* Agregar más zonas horarias y ubicaciones según sea necesario */}
          </select>
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={textareaStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Imagen de Perfil:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={inputStyle}
          />
          {profileImage && <img src={profileImage} alt="Perfil" style={{ maxWidth: '100%', borderRadius: '4px' }} />}
        </div>
        <button type="submit" style={buttonStyle}>
          Guardar Cambios
        </button>
        <Button onClick={() => redirectToMenu('profile')} style={homeButtonStyle}>Ir Mi Cuenta</Button>
      </form>
    </div>
  );
};

export default EditarPerfil;
