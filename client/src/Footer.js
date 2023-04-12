import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={9} className='d-flex align-items-center'>
            <h4>© Quentin Doniczka</h4>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <h5 className='p-1'>Contact</h5>
            <p className="d-flex flex-column align-items-start">
              <span>Email: <a href="mailto:doniczka.quentin67@gmail.com">doniczka.quentin67@gmail.com</a></span>
              <span>Téléphone: 06 12 93 86 28</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;