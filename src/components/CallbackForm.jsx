// EnrollForm.jsx
import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';


const CallbackForm = ({ show, handleClose }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      size="lg" // larger modal for split layout
    >
      <Modal.Body style={{ padding: 0 }}>
        <Row>
          {/* Left Image Section */}
          <Col md={5} style={{ padding: 0 }}>
            <img 
              src='assets/Callback.png'
              alt="Request Callback" 
              style={{ 
    width: '100%', 
    height: '100%', 
    // objectFit: 'contain',  
    borderTopLeftRadius: '0.3rem', 
    borderBottomLeftRadius: '0.3rem',
    backgroundColor: '#f0f0f0' // optional, to fill empty space
  }}
            />
          </Col>

          {/* Right Form Section */}
          <Col md={7} style={{ padding: '2rem' }}>
            <h4 className="mb-4">Request a Callback</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CallbackForm;
