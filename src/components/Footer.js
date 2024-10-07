import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
 

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col className="text-center mb-3">
                        <img src={'/img/logow.png'} alt="Logo" style={{ width: '250px' }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h5>UBÍCANOS</h5>
                        <hr className="bg-white" style={{ height: "2px", border: "none" }} />
                        <p>
                            <FaMapMarkerAlt className="me-2" /> Carretera Troncal de Occidente Km. 1, Vía Corozal - Sincelejo, Colombia
                        </p>
                        <p>
                            <FaPhone className="me-2" /> 3145248816 - 3167410103
                        </p>
                        <p>
                            <FaPhone className="me-2" /> Teléfono: +60(5) 2798900
                        </p>
                        <p>
                            <FaEnvelope className="me-2" /> archivocentral@cecar.edu.co
                        </p>
                        <p>
                            Centro de Atención Universitario-CAU, Montería
                        </p>
                        <p>
                            Calle 29 N° 2-43 (2do Piso - Local 200) Edificio Morindó
                        </p>
                        <p>
                            <FaPhone className="me-2" /> 3215729545 - 3104929087
                        </p>
                        <p>
                            <FaEnvelope className="me-2" /> contactomonteria@cecar.edu.co
                        </p>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <h5>ENLACES DE INTERÉS</h5>
                                <hr className="bg-white" style={{ height: "2px", border: "none" }} />
                                <p>Estatuto del Bienestar</p>
                                <p>Estatuto Docente</p>
                                <p>Estatuto General</p>
                                <p>Código de Ética</p>
                                <p>Política de Tratamiento de Información Personal</p>
                                <p>Trabaja con nosotros</p>
                                <p>Derechos Pecuniarios</p>
                                <p>Retorno Seguro</p>
                            </Col>
                            <Col>
                                <h5>NORMATIVIDAD INSTITUCIONAL</h5>
                                <hr className="bg-white" style={{ height: "2px", border: "none" }} />
                                <p>Normas internas</p>
                                <p>Personería Jurídica</p>
                                <p>Proyecto Educativo Institucional - PEI</p>
                                <p>Plan de Desarrollo Institucional</p>
                                <p>Plan prospectivo hasta 2036</p>
                                <p>Información Tributaria</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Bienestar CECAR. Vigilada MINEDUCACIÓN. Personería Jurídica: Resolución 7786 del 15 de junio de 1978.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
