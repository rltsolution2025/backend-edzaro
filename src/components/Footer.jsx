import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>RLT Edzaro</h5>
            <p className="mb-0">Empowering future software developers with hands-on training.</p>
           <p className="mt-3">
  <strong>Address:</strong><br />
  2, 1st St, Corporation Colony, Rangarajapuram, Kodambakkam, Chennai, Tamil Nadu 600024<br />
  Phone: +91 89255 00513 | Email: info@edzaro.com
</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/courses" className="text-light text-decoration-none">Courses</Link></li>
              <li><Link to="/inside-program/AI-Developer" className="text-light text-decoration-none">Program</Link></li>
              <li><Link to="/career" className="text-light text-decoration-none">Career</Link></li>
              <li><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/rltedzaro/" className="text-light me-3"><i className="bi bi-facebook fs-4"></i></a>
              <a href="https://www.youtube.com/@RLTEdzaro" className="text-light me-3"><i className="bi bi-youtube fs-4"></i></a>
              <a href="https://www.linkedin.com/company/rlt-edzaro/" className="text-light me-3"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="https://www.instagram.com/rlt_edzaro" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
            </div>
            <p className="mt-3 mb-0">&copy; 2023 RLT Edzaro. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;