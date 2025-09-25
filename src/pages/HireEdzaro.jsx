import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const HireEdzaro = () => {
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
            <h1 className="mb-4">Hire from Edzaro</h1>
            <p className="lead">
              Connect with our talented graduates who are ready to make an immediate impact in your organization. 
              Our students are trained in the latest technologies and real-world project development.
            </p>
          </Col>
        </Row>

        {/* Why Hire Our Graduates */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Why Hire Edzaro Graduates?</h3>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-lightning-charge display-6 text-warning me-3"></i>
                      <h5 className="mb-0">Industry-Ready Skills</h5>
                    </div>
                    <p>Our graduates have completed 50+ projects using modern tech stacks and best practices</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-people display-6 text-primary me-3"></i>
                      <h5 className="mb-0">Team Players</h5>
                    </div>
                    <p>Trained in Agile methodologies and collaborative development through group projects</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-graph-up display-6 text-success me-3"></i>
                      <h5 className="mb-0">Quick Learners</h5>
                    </div>
                    <p>Proven ability to adapt and learn new technologies rapidly in intensive training</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-shield-check display-6 text-info me-3"></i>
                      <h5 className="mb-0">Quality Guarantee</h5>
                    </div>
                    <p>90-day placement guarantee - if not satisfied, we'll provide replacement at no cost</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Hiring Options */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Hiring Options</h3>
            <Row>
              <Col md={4} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card h-100 text-center border-primary"
                >
                  <Card.Header className="bg-primary text-white">
                    <h5 className="mb-0">Direct Hire</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="price display-4 text-primary mb-3">$0</div>
                    <p>No placement fees - connect directly with candidates</p>
                    <ListGroup variant="flush" className="mb-3">
                      <ListGroup.Item>Full candidate profiles</ListGroup.Item>
                      <ListGroup.Item>Direct messaging</ListGroup.Item>
                      <ListGroup.Item>Interview scheduling</ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-primary">Get Started</Button>
                  </Card.Body>
                </motion.div>
              </Col>
              <Col md={4} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card h-100 text-center border-success"
                >
                  <Card.Header className="bg-success text-white">
                    <h5 className="mb-0">Managed Placement</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="price display-4 text-success mb-3">$2,500</div>
                    <p>We handle the entire hiring process for you</p>
                    <ListGroup variant="flush" className="mb-3">
                      <ListGroup.Item>Pre-screened candidates</ListGroup.Item>
                      <ListGroup.Item>Custom matching</ListGroup.Item>
                      <ListGroup.Item>90-day guarantee</ListGroup.Item>
                    </ListGroup>
                    <Button variant="success">Choose Plan</Button>
                  </Card.Body>
                </motion.div>
              </Col>
              <Col md={4} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card h-100 text-center border-warning"
                >
                  <Card.Header className="bg-warning text-dark">
                    <h5 className="mb-0">Internship Program</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="price display-4 text-warning mb-3">$1,000</div>
                    <p>3-month internship with conversion option</p>
                    <ListGroup variant="flush" className="mb-3">
                      <ListGroup.Item>Flexible duration</ListGroup.Item>
                      <ListGroup.Item>Mentorship included</ListGroup.Item>
                      <ListGroup.Item>Conversion bonus</ListGroup.Item>
                    </ListGroup>
                    <Button variant="warning">Learn More</Button>
                  </Card.Body>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Employer Signup Form */}
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Header className="bg-dark text-white">
                <h4 className="mb-0">Become an Hiring Partner</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter company name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your full name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="company@email.com" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>What roles are you hiring for?</Form.Label>
                    <Form.Select>
                      <option>Select roles...</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full-Stack Developer</option>
                      <option>Mobile Developer</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" className="w-100">
                    Get Access to Talent Pool
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default HireEdzaro;