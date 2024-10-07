import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, description, backgroundColor }) => {
  return (
    <Card 
      style={{
        backgroundColor,
        marginBottom: '20px',
        height: '100%',
        borderRadius: '15px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
      }}
      className="animated-card"
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
      }}
    >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
        <Card.Title style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '600' }}>{title}</Card.Title>
        <Card.Text style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.5' }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;