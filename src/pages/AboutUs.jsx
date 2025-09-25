import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <Container>
        <Row className="mb-5">
          <Col md={10} className="mx-auto text-center">
            <h1 className="mb-4">About Edzaro</h1>
            <p className="lead">
              Founded in 2020 with a mission to skill 10,000 developers by 2025, Edzaro is committed to 
              making quality software education accessible to everyone, everywhere.
            </p>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="mb-5">
          <Col md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="card h-100 border-0 shadow-sm"
            >
              <Card.Body className="text-center">
                <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
                <h4>Our Mission</h4>
                <p>To democratize access to world-class software development education and create pathways to rewarding tech careers for people from all backgrounds.</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="card h-100 border-0 shadow-sm"
            >
              <Card.Body className="text-center">
                <i className="bi bi-eye display-4 text-success mb-3"></i>
                <h4>Our Vision</h4>
                <p>To become the most trusted platform for transformative tech education, empowering individuals and organizations to thrive in the digital economy.</p>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>

        {/* Company Story */}
        <Row className="mb-5">
          <Col md={12}>
            <Card className="bg-light border-0">
              <Card.Body className="p-5">
                <h3 className="text-center mb-4">Our Story</h3>
                <Row>
                  <Col md={6}>
                    <p>
                      Edzaro was born from a simple observation: the tech industry was growing rapidly, 
                      but access to quality education wasn't keeping pace. Our founders, seasoned tech 
                      professionals themselves, saw the gap between traditional education and industry needs.
                    </p>
                    <p>
                      Starting with just 12 students in 2020, we've grown to impact thousands of lives 
                      across 15 countries. Our project-based approach and industry-aligned curriculum 
                      have proven successful time and again.
                    </p>
                  </Col>
                  <Col md={6}>
                    <motion.img 
                      src="https://via.placeholder.com/500x300/6c757d/ffffff?text=Edzaro+Team" 
                      alt="Diverse team of Edzaro instructors and staff collaborating in modern office environment"
                      className="img-fluid rounded shadow"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Members */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Meet Our Leadership Team</h3>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="text-center border-0 shadow-sm">
                  <Card.Img variant="top" src="https://via.placeholder.com/300x300/007bff/ffffff?text=CEO" alt="Portrait of Sarah Johnson, CEO of Edzaro with professional demeanor" />
                  <Card.Body>
                    <Card.Title>Sarah Johnson</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">CEO & Founder</Card.Subtitle>
                    <Card.Text>Former Google Engineering Manager with 15+ years in tech education</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="text-center border-0 shadow-sm">
                  <Card.Img variant="top" src="https://via.placeholder.com/300x300/28a745/ffffff?text=CTO" alt="Portrait of Michael Chen, CTO of Edzaro in technical setting" />
                  <Card.Body>
                    <Card.Title>Michael Chen</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chief Technology Officer</Card.Subtitle>
                    <Card.Text>Ex-Facebook engineer specializing in scalable learning platforms</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="text-center border-0 shadow-sm">
                  <Card.Img variant="top" src="https://via.placeholder.com/300x300/dc3545/ffffff?text=CDO" alt="Portrait of Maria Rodriguez, Chief Development Officer at Edzaro" />
                  <Card.Body>
                    <Card.Title>Maria Rodriguez</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chief Development Officer</Card.Subtitle>
                    <Card.Text>Curriculum expert with background in computer science education</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Company Stats */}
        <Row>
          <Col md={8} className="mx-auto">
            <h3 className="text-center mb-4">By the Numbers</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Students Trained</span>
                <strong className="text-primary">4,200+</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Countries Served</span>
                <strong className="text-success">15</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Instructors</span>
                <strong className="text-info">45</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Partner Companies</span>
                <strong className="text-warning">120+</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Graduation Rate</span>
                <strong className="text-danger">94%</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutUs;