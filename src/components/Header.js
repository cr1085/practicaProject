import React from 'react';

const Header = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para mejorar el contraste
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>{subtitle}</p>
        <h1 style={{ fontSize: '5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
