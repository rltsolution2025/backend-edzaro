import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Hire.css';

const HireEdzaro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-5 position-relative"
      style={{ background: '#f2f8ff' }} // keeping background light blue
    >
    <section className="hire-section animated-bg-hiring">
      {/* Right decorative shape - wave style */}
      <div className="hire-shape"></div>

      <div className="container hero-content">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-md-6 mb-4 mb-md-0 text-white">
<h1 className="fw-bold display-5">
  Hire <span className="brand">Edzaro</span> Talent — <br /> Certified, Skilled & Job-Ready
</h1>
<p className="lead mt-3">
  Edzaro provides industry-recognized certifications delivered by certified trainers. 
  Our students complete real-world hands-on projects and are highly skilled, making them 
  fully prepared to contribute from day one.
</p>

            <button className="btn btn-light btn-lg mt-3 fw-semibold">
              Hire from Edzaro
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
            <div className="hiring-illustration">
<div className="floating-card card-1">
  <h5>Cloud Developer</h5>
  <p>Build scalable cloud apps with AWS.</p>
</div>

<div className="floating-card card-2">
  <h5>AI Developer</h5>
  <p>Create smart AI-powered applications.</p>
</div>

<div className="floating-card card-3">
  <h5>AWS Certifications</h5>
  <p>Earn top AWS certifications fast.</p>
</div>


            </div>
          </div>
        </div>
      </div>
    </section>

      <Container>
        {/* TOP ROW: 0 Hiring Cost Note + Employer Signup Form */}
        <Row className="mb-5 p-5 align-items-center g-4">
          {/* 0 Hiring Cost Note */}
          <Col md={6}>
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4 text-white rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center hiring-box-bg"
  >
    <h3 className="fw-bold mb-3">0 Hiring Cost!</h3>
    <p className="lead mb-3">
      Connect directly with our talented graduates without any placement fees.
      Access industry-ready candidates instantly.
    </p>
    <img
      src="/assets/Hire.png" // replace with your image
      alt="Hiring Note"
      className="img-fluid rounded-4 mt-auto shadow"
      style={{ maxHeight: '180px' }}
    />
  </motion.div>
</Col>

          {/* Employer Signup Form */}
          <Col md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
             <Card className="shadow-lg h-100">
  <Card.Header className="bg-secondary text-white"> {/* dark shade of background */}
    <h4 className="mb-0">Become a Hiring Partner</h4>
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
      <Button variant="warning" className="w-100"> {/* yellow button */}
        Get Access to Talent Pool
      </Button>
    </Form>
  </Card.Body>
</Card>

            </motion.div>
          </Col>
        </Row>

        {/* Intro Section */}
        <Row className="mb-5">
          <Col md={10} className="mx-auto text-center">
            <h1 className="mb-4 fw-bold display-5">Hire from Edzaro</h1>
            <p className="lead text-muted">
              Connect with our talented graduates who are ready to make an immediate impact in your organization.
              Our students are trained in the latest technologies and real-world project development.
            </p>
          </Col>
        </Row>

        {/* Why Hire Our Graduates */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4 fw-bold">Why Hire Edzaro Graduates?</h3>
            <Row>
              {[
                { icon: "⚡", title: "Industry-Ready Skills", desc: "Our graduates have completed 50+ projects using modern tech stacks and best practices", color: "warning" },
                { icon: "👥", title: "Team Players", desc: "Trained in Agile methodologies and collaborative development through group projects", color: "primary" },
                { icon: "📈", title: "Quick Learners", desc: "Proven ability to adapt and learn new technologies rapidly in intensive training", color: "success" },
                { icon: "🛡️", title: "Quality Guarantee", desc: "90-day placement guarantee - if not satisfied, we'll provide replacement at no cost", color: "info" },
              ].map((item, i) => (
                <Col md={6} key={i} className="mb-4">
                  <motion.div whileHover={{ scale: 1.03 }} className="h-100">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <div className={`d-flex align-items-center mb-3 text-${item.color}`}>
                          <span style={{ fontSize: "2rem" }} className="me-3">{item.icon}</span>
                          <h5 className="mb-0">{item.title}</h5>
                        </div>
                        <p className="text-muted">{item.desc}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default HireEdzaro;
