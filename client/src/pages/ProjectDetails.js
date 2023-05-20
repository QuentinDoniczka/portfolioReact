import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const ProjectDetails = ({ projects }) => {
  const [showVideo, setShowVideo] = useState(false);
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

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const renderVideo = () => {
    if (showVideo && project.linkVideo && project.linkVideo.trim() !== '') {
      let videoId;
      if (project.linkVideo.includes('youtu.be')) {
        videoId = project.linkVideo.split('youtu.be/')[1];
      } else {
        videoId = new URL(project.linkVideo).searchParams.get('v');
      }
      return (
        <div style={{ width: '80%', height: '60vh', position: 'relative', margin: '0 auto' }}>
          <iframe
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      );
    }
    return null;
  };
  return (
    <Container className="project-details-container">
      <h1 className='text-center'>{project.title}</h1>
      <Container className="project-details-font">
        <div className="mx-auto">
          <p>
            {renderLongDescription()}
          </p>
          {renderVideo()}
        </div>
      </Container>
      <Container className="d-flex justify-content-center align-items-center project-links gap-5 p-5">
        <Button href={project.linkGit} target="_blank">GitHub</Button>
        <Button href={project.linkProject} target="_blank">Site du Projet</Button>
        {project.linkVideo && project.linkVideo.trim() !== '' && (
    <Button onClick={toggleVideo}>{showVideo ? 'Masquer la Vidéo' : 'Afficher la Vidéo'}</Button>
  )}
      </Container>
    </Container>
  );
};

export default ProjectDetails;
