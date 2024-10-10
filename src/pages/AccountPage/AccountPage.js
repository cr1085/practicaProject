import React, { useState } from 'react'; // CAMBIOS REALIZADOS EN EL CÓDIGO
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/Sidebar';
import useAuth from '../../auth/useAuth';
import Footer from '../../components/Footer';
import EditarPerfil from '../../components/Edit_profile';
import CambiarContraseña from '../../components/CambiarContraseña';
import Calendario from '../../components/Calendario';
import Notificaciones from '../../components/Notificaciones';
import MostrarContenido from '../../components/MostrarContenido';

const AccountPage = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState('profile');

  const toggleContent = (view) => {
    setCurrentView(view);
  };

  const keyframesWalk = `
    @keyframes walk {
      0% { left: -20%; }
      100% { left: 120%; }
    } 
  `;

  const buttonStyle = {
    width: '150px', // Asegura que todos los botones tengan el mismo ancho
    margin: '10px', // Espacio alrededor de cada botón
    padding: '10px 0', // Espaciado interno uniforme
  };

  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row style={{ margin: 0, padding: 0, display: 'flex' }}>
        <Col xs={12} md={3} style={{ padding: 0 }}>
          <Sidebar toggleContent={toggleContent} />
        </Col>
        <Col xs={12} md={8} style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', backgroundImage: 'url(/img/cecar2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <style>{keyframesWalk}</style>
          <Card style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', padding: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Card.Header as="h1" style={{ backgroundColor: '#343a40', color: '#fff', textAlign: 'center', padding: '10px 0', position: 'relative', borderRadius: '15px 15px 0 0' }}>
              Mi Cuenta
              {currentView !== 'editProfile' && (
                <div style={{ position: 'absolute', top: '10px', left: '0', width: '100%', height: '150px', overflow: 'hidden', zIndex: '0' }}>
                  <img src="/img/tumblr_npop0e6Web1tac9dxo1_1280-ezgif.com-gif-to-webp-converter.webp" alt="Mono Caminando" style={{ position: 'absolute', top: '0', width: '150px', height: '150px', animation: 'walk 10s linear infinite' }} />
                </div>
              )}
            </Card.Header>
            <Card.Body style={{ textAlign: 'center', position: 'relative' }}>
              {currentView === 'editProfile' ? (
                <EditarPerfil user={user} />
              ) : currentView === 'changePassword' ? (
                <CambiarContraseña />
              ) : currentView === 'calendario' ? (
                <Calendario />
              ) : currentView === 'notificaciones' ? (
                <Notificaciones />
              ) : currentView === 'mostrarContenido' ? (
                <MostrarContenido />
              ) : (
                <>
                  <Card.Title style={{ color: '#343a40' }}>Bienvenido, {user.name}</Card.Title>
                  <Card.Text style={{ color: '#555', fontSize: '1.1em' }}>
                    Aquí puedes gestionar toda la información relacionada con tu cuenta. Usa el sidebar para acceder a diferentes secciones como Editar Perfil, Cambiar Contraseña, Calendario y Notificaciones.
                  </Card.Text>
                  <Button style={buttonStyle} onClick={() => toggleContent('editProfile')}>Editar Perfil</Button>
                  <Button style={buttonStyle} onClick={() => toggleContent('changePassword')}>Cambiar Contraseña</Button>
                  <Button style={buttonStyle} onClick={() => toggleContent('calendario')}>Calendario</Button>
                  <Button style={buttonStyle} onClick={() => toggleContent('notificaciones')}>Notificaciones</Button>
                  <Button style={buttonStyle} onClick={() => toggleContent('mostrarContenido')}>Mostrar Contenido</Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AccountPage;
