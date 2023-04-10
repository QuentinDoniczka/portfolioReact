import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardDetaille from '../CardDetaille';

const Projects = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project) => (
      <CardDetaille key={project.id} project={project} />
    ));
  };

  return (
    <Container className="my-4">
      <div className="projet-container"> 
        <Row className="g-4">
          {renderProjects()}
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
