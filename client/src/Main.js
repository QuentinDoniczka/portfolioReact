import React from 'react';
import './Main.css';
import List from './List';
import { Col, Container } from 'react-bootstrap';
import { BlockProjects } from './BlockProjects';

const Main = ({ projects }) => {
    const frontendItems = ['JavaScript', 'Reactjs', 'Bootstrap'];
    const backendItems = ['Node.js', 'Mysql, sqlite', 'PHP'];
    const developerItems = ['C#, C', 'Java', 'Python'];
    return (
        <main>
            <Container fluid className="d-flex align-items-center container-full-width shadow-box haut">
                <Col className="pt-3">
                        <h1 className="text-center">&lt;Frontend&gt;</h1>
                        <List items={frontendItems}/>
                    </Col>
                    <Col className="pt-3">
                        <h1 className="text-center">&lt;Backend&gt;</h1>
                        <List items={backendItems}/>
                    </Col>
                    <Col className="pt-3">
                        <h1 className="text-center">&lt;developeur&gt;</h1>
                        <List items={developerItems}/>
                    </Col>
            </Container>
            <Container className="container-full-width bas">
                <Col>
                    <div className="m-3 title">Last project :</div>
                    <div className="m-2">
                        <BlockProjects projects={projects}/>
                    </div>
                </Col>
            </Container>
        </main>
    );
};

export default Main;
