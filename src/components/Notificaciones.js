import React, { useState, useEffect } from 'react';
import { ListGroup, Spinner, Alert, Button } from 'react-bootstrap';

// Elimina esta línea si 'useAuth' no se usa
// import useAuth from '../auth/useAuth';

const Notificaciones = ({ redirectToMenu }) => { 

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

  const [notificaciones, setNotificaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotificaciones = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const mockNotificaciones = [
            { id: 1, mensaje: 'Tienes una nueva tarea asignada', fecha: '2024-10-01' },
            { id: 2, mensaje: 'Se ha actualizado el calendario', fecha: '2024-10-02' },
            { id: 3, mensaje: 'Tu perfil ha sido revisado', fecha: '2024-10-05' },
          ];
          setNotificaciones(mockNotificaciones);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError('Error al cargar las notificaciones');
        setLoading(false);
      }
    };
    fetchNotificaciones();
  }, []);

  const fadeInStyle = {
    animation: 'fadeIn 1s ease-in',
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <ListGroup>
          {notificaciones.length === 0 ? (
            <ListGroup.Item style={fadeInStyle}>No tienes notificaciones recientes.</ListGroup.Item>
          ) : (
            notificaciones.map((notificacion) => (
              <ListGroup.Item key={notificacion.id} style={fadeInStyle}>
                <strong>{notificacion.fecha}</strong> - {notificacion.mensaje}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      )}
      <Button onClick={() => redirectToMenu('profile')} style={homeButtonStyle}>Ir Mi Cuenta</Button>
    </>
  );
};

export default Notificaciones;
