import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MostrarContenido = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simula un pequeño retraso antes de redirigir a la página principal
    const timer = setTimeout(() => {
      navigate('/'); // Redirige a la página principal después de 2 segundos
    }, 2000);

    // Limpia el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '50vh', // Reducir altura del contenedor
      padding: '20px', 
      backgroundColor: '#f8f9fa' 
    }}> 
      <h1 style={{ fontSize: '1.4em', textAlign: 'center', marginBottom: '5px' }}>Redirigiendo a la página principal...</h1>
      <p style={{ fontSize: '1.2em', textAlign: 'center' }}>Por favor espera un momento.</p>
    </div>
  );
};

export default MostrarContenido;
