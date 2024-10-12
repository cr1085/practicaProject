import React, { useState } from 'react';
import { Button, Form, Row, Col, Image } from 'react-bootstrap';

const EditarPerfil = ({ user, redirectToMenu }) => {
  const [emailVisibility, setEmailVisibility] = useState('visible');
  const [profileImage, setProfileImage] = useState(null);
  const [description, setDescription] = useState('');

  const containerStyle = {
    width: '100%',
    maxWidth: '90%', // Ajuste responsivo
    margin: '60px auto',
    padding: '20px', // Reducir el padding
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  };

  const handleImageChange = (event) => {
    setProfileImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleEmailVisibilityChange = (event) => {
    setEmailVisibility(event.target.value);
  };

  const buttonStyle = {
    width: '150px',
    margin: '15px',
    padding: '10px 0',
    backgroundColor: '#FFA500', // Color amarillo-naranja
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '40px', // Espacio adicional debajo del botón
  };

  return (
    <div style={containerStyle}>
      <Row>
        <Col xs={12} lg={8} style={{ margin: '0 auto' }}> {/* Centro y ajuste responsivo */}
          <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '15px' }}>Editar Perfil</h2> {/* Reducir el margen inferior */}
          <Form>
            <Form.Group as={Row} controlId="formPlaintextName" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Nombre:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" defaultValue={user.name} style={{ borderRadius: '4px' }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Email:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="email" defaultValue={user.email} style={{ borderRadius: '4px' }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmailVisibility" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Visibilidad del Correo:
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" value={emailVisibility} onChange={handleEmailVisibilityChange} style={{ borderRadius: '4px' }}>
                  <option value="visible">Visible para los participantes en el curso</option>
                  <option value="hidden">Oculto</option>
                  <option value="visibleToAll">Visible para todos</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextIdentity" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Número de Identidad/C.C:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" defaultValue={user.identityNumber} style={{ borderRadius: '4px' }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextTimezone" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Zona Horaria:
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" defaultValue={user.timezone} style={{ borderRadius: '4px' }}>
                  <option value="America/Bogotá">Zona horaria del servidor (América/Bogotá)</option>
                  <option value="America/New_York">Zona horaria del servidor (América/Nueva_York)</option>
                  <option value="America/Los_Angeles">Zona horaria del servidor (América/Los_Ángeles)</option>
                  <option value="Europe/London">Zona horaria del servidor (Europa/Londres)</option>
                  <option value="Asia/Tokyo">Zona horaria del servidor (Asia/Tokio)</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextDescription" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Descripción:
              </Form.Label>
              <Col sm="8">
                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} style={{ borderRadius: '4px', height: '80px' }} /> {/* Reducir la altura */}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formProfileImage" style={{ marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Form.Label column sm="4" style={{ fontWeight: 'bold', color: 'black' }}>
                Imagen de Perfil:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} style={{ borderRadius: '4px' }} />
                {profileImage && <Image src={profileImage} alt="Perfil" fluid rounded style={{ marginTop: '10px' }} />}
              </Col>
            </Form.Group>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}> {/* Reducir el margen inferior */}
              <Button type="submit" variant="dark" style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '4px' }}>
                Guardar Cambios
              </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => redirectToMenu('profile')} style={buttonStyle}> {/* Ajustar el color */}
                Ir Mi Cuenta
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default EditarPerfil;
