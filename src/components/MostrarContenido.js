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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <h1>Redirigiendo a la página principal...</h1>
      <p>Por favor espera un momento.</p>
    </div>
  );
};

export default MostrarContenido;
