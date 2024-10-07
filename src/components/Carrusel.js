import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [items.length]);

  return (
    <div style={{
      position: 'relative',
      width: '100%', 
      height: '600px',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
    }}>
      <img
        src={items[currentIndex].image}
        alt={items[currentIndex].text}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          opacity: currentIndex === items.length - 1 ? 1 : 0.9,
          transform: `scale(${currentIndex === items.length - 1 ? 1 : 0.95})`,
        }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
      }}>
        <h2 style={{ margin: '0', fontSize: '36px' }}>{items[currentIndex].text}</h2>
        <p style={{ margin: '10px 0', fontSize: '18px' }}>{items[currentIndex].description}</p>
        <Link
          to={items[currentIndex].link} // Cambiado a Link
          style={{
            backgroundColor: items[currentIndex].buttonColor,
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = items[currentIndex].buttonColor}
        >
          Ir a la página
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
