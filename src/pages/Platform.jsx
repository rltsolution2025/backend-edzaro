import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Button} from 'react-bootstrap';



const Platform = () => {
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
            <h1 className="mb-4">Our Learning Platform</h1>
            <p className="lead">
              Experience learning redefined with our cutting-edge platform designed specifically for 
              software development education. Access courses anytime, anywhere, with features built for success.
            </p>
          </Col>
        </Row>

        {/* Platform Features */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-play-circle display-4 text-primary mb-3"></i>
                <h5>Live & Recorded Classes</h5>
                <p>Attend live sessions or watch recordings at your own pace with full HD video quality</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-code-square display-4 text-success mb-3"></i>
                <h5>Integrated Code Editor</h5>
                <p>Write, run, and debug code directly in the browser with our built-in IDE</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-chat-dots display-4 text-info mb-3"></i>
                <h5>Real-time Collaboration</h5>
                <p>Pair programming, group projects, and instant messaging with peers and mentors</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-clipboard-check display-4 text-warning mb-3"></i>
                <h5>Progress Tracking</h5>
                <p>Visual dashboards showing your learning progress, completion rates, and skill growth</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-cloud-arrow-down display-4 text-danger mb-3"></i>
                <h5>Offline Access</h5>
                <p>Download lessons and code exercises for learning without internet connection</p>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center border-0 shadow"
            >
              <Card.Body>
                <i className="bi bi-phone display-4 text-secondary mb-3"></i>
                <h5>Mobile App</h5>
                <p>Learn on the go with our dedicated iOS and Android mobile applications</p>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>

        {/* Platform Demo */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <Card className="bg-dark text-white">
              <Card.Body className="text-center py-5">
                <h3 className="mb-4">Experience Our Platform</h3>
                <p className="mb-4">Take a tour of our learning management system with interactive demo</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="demo-placeholder bg-secondary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{height: '300px'}}
                >
                  <i className="bi bi-play-btn display-1 text-light"></i>
                </motion.div>
                <Button variant="light" size="lg">Start Platform Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technical Requirements */}
        <Row>
          <Col md={8} className="mx-auto">
            <h3 className="text-center mb-4">Technical Requirements</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Supported Browsers</span>
                <small className="text-muted">Chrome, Firefox, Safari, Edge (latest versions)</small>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Internet Speed</span>
                <small className="text-muted">Minimum 5 Mbps for HD video</small>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Device Support</span>
                <small className="text-muted">Desktop, laptop, tablet, smartphone</small>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Storage</span>
                <small className="text-muted">2GB+ recommended for offline content</small>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Platform;