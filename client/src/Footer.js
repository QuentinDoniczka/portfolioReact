import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='d-flex align-items-center'>
            <h4>© Quentin Doniczka</h4>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h5>Contact</h5>
            <p className="d-flex flex-column align-items-start ">
              <span>Email: <a href="mailto:doniczka.quentin67@gmail.com">doniczka.quentin67@gmail.com</a></span>
              <span>Téléphone: 06 12 93 86 28</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        
      </Container>
    </footer>
  );
};

export default Footer;