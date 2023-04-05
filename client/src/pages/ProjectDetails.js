import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  const renderLongDescription = () => {
    const paragraphs = project.longDescription.split('. ');
    return paragraphs.map((paragraph, index) => (
      <div key={index}>
        {paragraph}
        {index < paragraphs.length - 1 ? '.' : ''}
      </div>
    ));
  };

  return (
    <Container className="project-details-container">
      <Container className="project-details-font">
        <h1 className='text-center'>{project.title}</h1>
        <div className="long-description">{renderLongDescription()}</div>
      </Container>
      <Container className="d-flex justify-content-center align-items-center project-links gap-5 p-5">
          <Button href={project.gitUrl} target="_blank">GitHub</Button>
          <Button href={project.projectSiteUrl} target="_blank">Site du Projet</Button>
          <Button href={project.demoVideoUrl} target="_blank" disabled={!project.demoVideoUrl}>Vidéo Démo</Button>
        </Container>
    </Container>

  );
};

export default ProjectDetails;
