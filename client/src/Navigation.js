import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './Navigation.css';
import logo from './assets/logo.png';
import emailIcon from './assets/emailIcon.png';
import phoneIcon from './assets/phoneIcon.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Row className="w-100">
          <Col xs={4} className="d-flex justify-content-center">
            <Navbar.Brand href="#">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
              <span className="text">Doniczka Quentin</span>
            </Navbar.Brand>
          </Col>
          <Col xs={4} className="d-flex justify-content-center">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/Biography" className="custom-nav-link">about</Nav.Link>
            <Nav.Link as={Link} to="/Projet" className="custom-nav-link">projet</Nav.Link>
            <Nav.Link as={Link} to="/MyCv" className="custom-nav-link">cv</Nav.Link>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex justify-content-center">
            <Nav>
              <Nav.Link href="mailto:doniczka.quentin67@gmail.com">
                <img
                  src={emailIcon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Email"
                />
                <span className="contact-text">doniczka.quentin67@gmail.com</span>
              </Nav.Link>
              <Nav.Link href="tel:0612938628">
                <img
                  src={phoneIcon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Phone"
                />
                <span className="contact-text">06 12 93 86 28</span>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
