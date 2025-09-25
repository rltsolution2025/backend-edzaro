import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Career = () => {
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
            <h1 className="mb-4">Career Services</h1>
            <p className="lead">
              We don't just teach you to code - we prepare you for a successful career in tech. 
              Our comprehensive career support helps 92% of graduates land jobs within 6 months.
            </p>
          </Col>
        </Row>

        {/* Career Support Services */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 shadow border-0"
            >
              <Card.Img variant="top" src="https://via.placeholder.com/400x250/28a745/ffffff?text=Resume+Building" alt="Professional resume template with modern design and tech skills section" />
              <Card.Body>
                <Card.Title>Resume & Portfolio Building</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <li>✓ Tech-specific resume templates</li>
                    <li>✓ GitHub portfolio optimization</li>
                    <li>✓ Personal website development</li>
                    <li>✓ LinkedIn profile enhancement</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 shadow border-0"
            >
              <Card.Img variant="top" src="https://via.placeholder.com/400x250/007bff/ffffff?text=Interview+Prep" alt="Mock interview session with career coach and candidate" />
              <Card.Body>
                <Card.Title>Interview Preparation</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <li>✓ Technical interview practice</li>
                    <li>✓ Behavioral question coaching</li>
                    <li>✓ Mock interviews with feedback</li>
                    <li>✓ Coding challenge strategies</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 shadow border-0"
            >
              <Card.Img variant="top" src="https://via.placeholder.com/400x250/fd7e14/ffffff?text=Job+Placement" alt="Network of tech companies and job opportunities visualization" />
              <Card.Body>
                <Card.Title>Job Placement Support</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <li>✓ Direct employer connections</li>
                    <li>✓ Exclusive job board access</li>
                    <li>✓ Career fair participation</li>
                    <li>✓ Salary negotiation guidance</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>

        {/* Success Statistics */}
        <Row className="mb-5">
          <Col md={12}>
            <Card className="bg-light border-0">
              <Card.Body className="text-center py-5">
                <h3 className="mb-4">Our Career Success Metrics</h3>
                <Row>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="stat-circle bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                      style={{width: '100px', height: '100px'}}
                    >
                      <div>
                        <div className="h4 mb-0">92%</div>
                        <small>Job Placement</small>
                      </div>
                    </motion.div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="stat-circle bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                      style={{width: '100px', height: '100px'}}
                    >
                      <div>
                        <div className="h4 mb-0">$85K</div>
                        <small>Average Salary</small>
                      </div>
                    </motion.div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="stat-circle bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                      style={{width: '100px', height: '100px'}}
                    >
                      <div>
                        <div className="h4 mb-0">120+</div>
                        <small>Partner Companies</small>
                      </div>
                    </motion.div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="stat-circle bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                      style={{width: '100px', height: '100px'}}
                    >
                      <div>
                        <div className="h4 mb-0">6 mos</div>
                        <small>Avg. Hire Time</small>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Career Timeline */}
        <Row>
          <Col md={8} className="mx-auto">
            <h3 className="text-center mb-4">Your Career Journey with Edzaro</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Week 1-4: Skills Assessment</span>
                <Button size="sm" variant="outline-primary">Details</Button>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Week 5-8: Resume Building</span>
                <Button size="sm" variant="outline-primary">Details</Button>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Week 9-12: Interview Prep</span>
                <Button size="sm" variant="outline-primary">Details</Button>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>Graduation: Job Matching</span>
                <Button size="sm" variant="outline-primary">Details</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Career;