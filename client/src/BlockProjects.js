import React from 'react';
import { CardProject } from './CardProject';
import { Container } from 'react-bootstrap';

export const BlockProjects = ({ projects }) => {
    console.log(projects);
    return (
            <Container className="d-flex justify-content-center">
            {projects.slice(0, 3).map(project => (
                <CardProject project={project} key={project.title} />
            ))}
            </Container>
    );
};
