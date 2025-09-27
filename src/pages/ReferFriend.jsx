import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ReferFriend = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h1 className="mb-4">Refer a Friend</h1>
            <p className="lead">
              Share the Edzaro experience with your friends and earn rewards! Both you and your friend will receive special benefits.
            </p>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center shadow border-0"
            >
              <div className="card-body">
                <i className="bi bi-gift display-4 text-primary mb-3"></i>
                <h5>Rs. 20000 Credit for You</h5>
                <p>Get 20000 off your next course when your friend enrolls</p>
              </div>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center shadow border-0"
            >
              <div className="card-body">
                <i className="bi bi-currency-dollar display-4 text-success mb-3"></i>
                <h5>Rs.10000 Off for Friend</h5>
                <p>Your friend gets 10000 off their first course enrollment</p>
              </div>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="card h-100 text-center shadow border-0"
            >
              <div className="card-body">
                <i className="bi bi-award display-4 text-warning mb-3"></i>
                <h5>Extra Rewards</h5>
                <p>Refer 3+ friends and get exclusive mentorship sessions</p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Referral Form */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">Share Your Referral Link</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Unique Referral Link</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        value="https://edzaro.com/ref/your-unique-code"
                        readOnly
                      />
                      <Button variant="outline-secondary">Copy Link</Button>
                    </div>
                    <Form.Text className="text-muted">
                      Share this link with your friends via email, social media, or messaging apps
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Or Send Referral via Email</Form.Label>
                    <Row>
                      <Col md={6}>
                        <Form.Control type="email" placeholder="Friend's Email" />
                      </Col>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="Your Name" />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Button variant="primary" className="w-100">
                    Send Referral Invitation
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How it Works */}
        <Row>
          <Col md={12}>
            <h3 className="text-center mb-4">How It Works</h3>
            <Row>
              <Col md={3} className="text-center mb-3">
                <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{width: '50px', height: '50px'}}>
                  1
                </div>
                <h6>Share Your Link</h6>
                <small>Send your unique referral link to friends</small>
              </Col>
              <Col md={3} className="text-center mb-3">
                <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{width: '50px', height: '50px'}}>
                  2
                </div>
                <h6>Friend Enrolls</h6>
                <small>They use your link to sign up for a course</small>
              </Col>
              <Col md={3} className="text-center mb-3">
                <div className="step-number bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{width: '50px', height: '50px'}}>
                  3
                </div>
                <h6>Complete Payment</h6>
                <small>Your friend completes their course payment</small>
              </Col>
              <Col md={3} className="text-center mb-3">
                <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{width: '50px', height: '50px'}}>
                  4
                </div>
                <h6>Get Rewarded</h6>
                <small>You both receive your discounts automatically</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ReferFriend;