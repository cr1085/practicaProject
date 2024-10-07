import { Container, Row, Col } from 'react-bootstrap';
import Carousel from '../components/Carrusel'; // Asegúrate de que el nombre sea correcto
import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import Footer from '../components/Footer';
import routes from '../helpers/routes';

export default function HomePage() {
  const carouselItems = [
    {
      image: '/img/monitorias.png',
      text: 'Monitoría Académica',
      description: 'Acompañamos a los estudiantes en su proceso educativo, ofreciendo apoyo y recursos para mejorar su rendimiento académico.',
      link: routes.monitorias, // Actualiza el enlace aquí
      buttonColor: '#ff5733',
    },
    {
      image: '/img/escuela_de_formacion.png',
      text: 'Escuelas de Formación',
      description: 'Ofrecemos programas de formación integral en diversas áreas, diseñados para potenciar el desarrollo personal y profesional.',
      link: routes.escuelas_de_formacion, // Actualiza el enlace aquí
      buttonColor: '#ff5733',
    },
    {
      image: '/img/atencion_medica.webp',
      text: 'Atención Médica',
      description: 'Brindamos atención médica integral, con un enfoque en el bienestar y la salud de nuestros pacientes.',
      link: routes.atencion_medica, // Actualiza el enlace aquí
      buttonColor: '#ff5733',
    },
    {
      image: '/img/Psicologia-clinica-salud.webp',
      text: 'Atención Psicológica',
      description: 'Nuestros programas de apoyo psicológico están diseñados para ayudar a las personas a enfrentar sus desafíos emocionales y mentales.',
      link: routes.atencion_psicologica, // Actualiza el enlace aquí
      buttonColor: '#ff5733',
    },
  ];

  return (
    <>
      <Header 
        backgroundImage="/img/campus.jpg"
        subtitle="Bienvenidos"
        title="Bienestar Institucional"
      />
     <Container className="mt-5" style={{ maxWidth: '1200px', margin: '100px auto',padding:'100px' }}>
      <Row className="text-center">
        <Col>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Nosotros</h2>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
            Bienestar Institucional se proclama de todos y para todos, siendo el corazón de nuestra Institución, orientado a favorecer la vida, la convivencia, la felicidad, el reconocimiento de la diversidad, la salud y la formación integral; a través de áreas y programas fundamentados en los componentes biológicos, psicológicos, cognitivos, sociológicos y espirituales.
          </p>
        </Col>
      </Row>
    </Container>
   

    <Container className="mt-5" style={{ marginBottom: "200px" }}>
        <Row className="text-center g-4 justify-content-center">
          <Col md={4}>
            <CardComponent 
              title="Misión" 
              description="Bienestar Institucional se proclama de todos y para todos, siendo el corazón de nuestra Institución, orientado a favorecer la vida, la convivencia, la felicidad, el reconocimiento de la diversidad, la salud y la formación integral."
              backgroundColor="rgba(42, 157, 143, 0.85)" // Color más opaco
            />
          </Col>
          <Col md={4}>
            <CardComponent 
              title="Visión" 
              description="Ser reconocido como un eje transversal capaz de fortalecer las dimensiones humanas en su diversidad, la construcción de una conciencia orientada a la convivencia armónica."
              backgroundColor="rgba(38, 70, 83, 0.85)" // Color más opaco
            />
          </Col>
        </Row>
      </Container>
    


      <Container className="mt-5"style={{ marginBottom: "200px" }}>
        <Col>
          <Carousel items={carouselItems} />
        </Col>
      </Container>
      <Footer/>
    </>
  
  );
}
