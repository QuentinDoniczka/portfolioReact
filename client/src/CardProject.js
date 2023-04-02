import React from 'react'
import { Card,Col } from 'react-bootstrap';
import './CardProject.css';
import imageMapping from './imageMapping';

export const CardProject = ({ project }) => {
    const placeholderImage = 'https://via.placeholder.com/500x300';
    const getImage = () => {
        if (imageMapping[project.image] !== undefined) {
          return imageMapping[project.image];
        } else {
          return placeholderImage;
        }
      };
    return (
        <Col className='d-flex justify-content-center text-center'>
            <Card className="card">
                <Card.Img className="p-2 myImg" variant="top" src={getImage()} />
                <Card.Body className="p-0 ms-2 text-start">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {project.description}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    )
}
