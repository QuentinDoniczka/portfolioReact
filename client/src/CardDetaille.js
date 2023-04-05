import React from 'react';
import { Card, Col } from 'react-bootstrap';
import imageMapping from './imageMapping';
import { Link } from 'react-router-dom';

const CardDetaille = ({ project }) => {
  const placeholderImage = 'https://via.placeholder.com/500x300';
  const getImage = () => {
    if (imageMapping[project.image] !== undefined) {
      return imageMapping[project.image];
    } else {
      return placeholderImage;
    }
  };

  return (
    <Col className='d-flex justify-content-center text-center' md={12}>
      <Card className="cardDetaille" style={{ width: '100%', marginBottom: '2rem' }}>
        <Link to={`/Projet/${project.id}`} className="card-project-link">
          <Card.Img className="p-2 myImg" variant="top" src={getImage()} style={{ height: '400px', objectFit: 'cover' }} />
          <Card.Body className="p-0 ms-2 text-start">
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {project.description}
            </Card.Subtitle>
            <Card.Text className="mt-2">{project.longDescription}</Card.Text>
            <Card.Subtitle className="mt-2 mb-2 text-muted">
              Technologies:
              <ul>
                {project.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </Card.Subtitle>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default CardDetaille;
