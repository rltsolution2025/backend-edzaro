import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-5"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1200x600/007bff/ffffff?text=Software+Development+Training)' }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Master Software Development</h1>
              <p className="lead">Join Edzaro's comprehensive training programs in web, mobile, and full-stack development. From beginners to pros, build real-world skills with expert mentors.</p>
              <Button variant="light" size="lg" className="me-2">Enroll Now</Button>
              <Button variant="outline-light" size="lg">Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="https://via.placeholder.com/500x300/ffffff/007bff?text=Hero+Image" alt="Hero" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Courses Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-5"
      >
        <Container>
          <h2 className="text-center mb-5">Our Software Development Courses</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow hover-shadow">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250/28a745/ffffff?text=Web+Dev" />
                <Card.Body>
                  <Card.Title>Web Development Bootcamp</Card.Title>
                  <Card.Text>Learn HTML, CSS, JavaScript, React, and Node.js. Build responsive websites from scratch.</Card.Text>
                  <Button variant="success">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow hover-shadow">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250/dc3545/ffffff?text=Mobile+App" />
                <Card.Body>
                  <Card.Title>Mobile App Development</Card.Title>
                  <Card.Text>Master Flutter or React Native for iOS and Android apps. Hands-on projects included.</Card.Text>
                  <Button variant="danger">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow hover-shadow">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250/ffc107/000000?text=Full-Stack" />
                <Card.Body>
                  <Card.Title>Full-Stack Development</Card.Title>
                  <Card.Text>End-to-end training: Frontend, Backend, Databases, and Deployment with AWS.</Card.Text>
                  <Button variant="warning">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Inside the Program Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-light py-5"
      >
        <Container>
          <h2 className="text-center mb-5">Inside the Edzaro Program</h2>
          <Row>
            <Col md={6}>
              <img src="https://via.placeholder.com/500x300/6f42c1/ffffff?text=Classroom+Training" alt="Training" className="img-fluid rounded mb-3" />
            </Col>
            <Col md={6}>
              <p>Our 12-week intensive program includes live coding sessions, real-world projects, mentorship from industry experts, and career placement support. 90% of graduates land jobs in top tech firms.</p>
              <ul>
                <li>Weekly assignments and code reviews</li>
                <li>Access to our online platform for 24/7 learning</li>
                <li>Certifications in high-demand skills</li>
              </ul>
              <Button variant="primary">Join the Program</Button>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"Edzaro transformed my career from zero to software engineer!"</p>
                  <Card.Text className="fw-bold">John Doe, Web Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"Hands-on training and great mentors. Highly recommend!"</p>
                  <Card.Text className="fw-bold">Jane Smith, Full-Stack Dev</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"From mobile apps to deployment—Edzaro covers it all."</p>
                  <Card.Text className="fw-bold">Alex Johnson, App Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;