import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <Container>
        {/* Hero/Intro Section */}
        <Row className="mb-5 text-center">
          <Col md={12}>
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="display-4 fw-bold mb-3"
            >
              Our Certified Courses
            </motion.h1>
            <p className="lead mb-4">
              Dive into cutting-edge software development with our AI Developer and Cloud Developer programs. 
              All courses are fully certified by <strong>Amazon AWS Cloud Academy</strong>, ensuring you gain industry-recognized credentials 
              and hands-on expertise in high-demand technologies. From foundational concepts to advanced projects, 
              prepare for roles at top tech companies.
            </p>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge bg="success" className="fs-5 px-3 py-2 me-2">AWS Certified</Badge>
              <Badge bg="primary" className="fs-5 px-3 py-2">Hands-On Projects</Badge>
              <Badge bg="warning" className="fs-5 px-3 py-2">Job-Ready Skills</Badge>
            </motion.div>
          </Col>
        </Row>

        {/* Course Cards */}
        <Row className="mb-5">
          {/* AI Developer Course */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="h-100"
            >
              <Card className="shadow-lg border-0 h-100">
                <Card.Img 
                  variant="top" 
                  src="https://via.placeholder.com/600x300/4e73df/ffffff?text=AI+Developer+Course" 
                  alt="AI Developer course illustration showing neural networks, machine learning models, and data processing"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title className="h4 mb-0">AI Developer Certification</Card.Title>
                    <Badge bg="danger" className="fs-6">
                      <i className="bi bi-robot me-1"></i>AWS Certified
                    </Badge>
                  </div>
                  <Card.Text className="mb-3">
                    Become an AI expert with this 12-week intensive program. Learn to build intelligent systems using machine learning, 
                    neural networks, and AWS AI services. Perfect for developers transitioning to AI roles.
                  </Card.Text>
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item><i className="bi bi-clock me-2 text-primary"></i>Duration: 12 weeks (200+ hours)</ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-currency-dollar me-2 text-success"></i>Fee: $1,499</ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-person-check me-2 text-info"></i>Prerequisites: Basic programming (Python/JavaScript)</ListGroup.Item>
                  </ListGroup>
                  <h6 className="fw-bold mb-2">Key Topics & Syllabus:</h6>
                  <ul className="small mb-3">
                    <li>Python for AI, Data Science fundamentals</li>
                    <li>Machine Learning algorithms (Supervised/Unsupervised)</li>
                    <li>Deep Learning with TensorFlow & PyTorch</li>
                    <li>AWS SageMaker, Rekognition, and Comprehend</li>
                    <li>AI Ethics, Model Deployment, and Capstone Project</li>
                  </ul>
                  <Card.Text className="small text-muted">
                    <strong>Projects:</strong> Build a sentiment analysis tool, image recognition app, and AI chatbot deployed on AWS.
                  </Card.Text>
                  <Button variant="primary" className="w-100 mb-2">
                    <i className="bi bi-enroll me-2"></i>Enroll Now
                  </Button>
                  <Button variant="outline-secondary" className="w-100">
                    View Full Syllabus
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Cloud Developer Course */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="h-100"
            >
              <Card className="shadow-lg border-0 h-100">
                <Card.Img 
                  variant="top" 
                  src="https://via.placeholder.com/600x300/17a2b8/ffffff?text=Cloud+Developer+Course" 
                  alt="Cloud Developer course illustration showing AWS cloud architecture, servers, and deployment pipelines"
                  className="rounded-top"
                />
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title className="h4 mb-0">Cloud Developer Certification</Card.Title>
                    <Badge bg="info" className="fs-6">
                      <i className="bi bi-cloud me-1"></i>AWS Certified
                    </Badge>
                  </div>
                  <Card.Text className="mb-3">
                    Master cloud-native development with AWS in this 10-week program. Design scalable applications, 
                    manage infrastructure as code, and deploy secure solutions. Ideal for DevOps and cloud engineering careers.
                  </Card.Text>
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item><i className="bi bi-clock me-2 text-primary"></i>Duration: 10 weeks (180+ hours)</ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-currency-dollar me-2 text-success"></i>Fee: $1,299</ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-person-check me-2 text-info"></i>Prerequisites: Basic web development knowledge</ListGroup.Item>
                  </ListGroup>
                  <h6 className="fw-bold mb-2">Key Topics & Syllabus:</h6>
                  <ul className="small mb-3">
                    <li>AWS Core Services (EC2, S3, Lambda, RDS)</li>
                    <li>Cloud Architecture & Security Best Practices</li>
                    <li>CI/CD Pipelines with CodePipeline & CodeDeploy</li>
                    <li>Serverless Computing & Microservices</li>
                    <li>Monitoring with CloudWatch, Cost Optimization</li>
                  </ul>
                  <Card.Text className="small text-muted">
                    <strong>Projects:</strong> Deploy a scalable web app on AWS, build a serverless API, and create an automated infrastructure using Terraform.
                  </Card.Text>
                  <Button variant="primary" className="w-100 mb-2">
                    <i className="bi bi-enroll me-2"></i>Enroll Now
                  </Button>
                  <Button variant="outline-secondary" className="w-100">
                    View Full Syllabus
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-5">
          <Col md={12}>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-4"
            >
              Why Choose Our AWS-Certified Courses?
            </motion.h2>
            <Row>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4"
                >
                  <i className="bi bi-award display-4 text-warning mb-3"></i>
                  <h5>Industry-Recognized Certification</h5>
                  <p>Upon completion, earn official AWS Cloud Academy certificates, validated by Amazon, boosting your resume and LinkedIn profile.</p>
                </motion.div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4"
                >
                  <i className="bi bi-laptop display-4 text-primary mb-3"></i>
                  <h5>Hands-On AWS Labs</h5>
                  <p>Access real AWS environments for practical experience—no personal account needed. Build portfolios with live projects.</p>
                </motion.div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4"
                >
                  <i className="bi bi-graph-up display-4 text-success mb-3"></i>
                  <h5>Career Acceleration</h5>
                  <p>95% placement rate. Get interview prep, resume reviews, and direct connections to AWS-partner companies.</p>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* AWS Certification Section */}
        <Row className="mb-5 bg-light rounded p-4">
          <Col md={12}>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-4"
            >
              Powered by Amazon AWS Cloud Academy
            </motion.h3>
            <Row className="align-items-center">
              <Col md={6}>
                <img 
                  src="https://via.placeholder.com/500x200/FF9900/ffffff?text=AWS+Cloud+Academy+Certified" 
                  alt="AWS Cloud Academy certification badge with Amazon logo and official seal"
                  className="img-fluid rounded shadow mb-3"
                />
                <p className="mb-0">
                  Our partnership with AWS Cloud Academy ensures your training aligns with the latest cloud and AI standards. 
                  Graduates receive digital badges and certificates shareable on professional networks. 
                  This certification is globally recognized and can lead to AWS Associate-level validations.
                </p>
              </Col>
              <Col md={6}>
                <Card className="border-warning">
                  <Card.Header className="bg-warning text-dark">
                    <h5 className="mb-0"><i className="bi bi-shield-check me-2"></i>Certification Benefits</h5>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Official AWS digital certificate</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Access to AWS exam prep resources</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>1-year AWS Cloud Academy subscription</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Priority for AWS job opportunities</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Stats/Quick Facts */}
        <Row className="mb-5 text-center">
          <Col md={3}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="display-4 text-primary fw-bold">2</div>
              <p className="h6">Specialized Tracks</p>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <div className="display-4 text-success fw-bold">500+</div>
              <p className="h6">Students Certified</p>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <div className="display-4 text-info fw-bold">10</div>
              <p className="h6">AWS Services Covered</p>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4"
            >
              <div className="display-4 text-warning fw-bold">95%</div>
              <p className="h6">Job Placement Rate</p>
            </motion.div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="text-center">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-3">Ready to Start Your Journey?</h3>
              <p className="mb-4">Enroll today and get 10% off your first course + free AWS trial credits.</p>
              <Button variant="success" size="lg" className="me-3">
                <i className="bi bi-arrow-right-circle me-2"></i>Apply Now
              </Button>
              <Button variant="outline-primary" size="lg">
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Courses;