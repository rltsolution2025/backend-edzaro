import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const CallbackForm = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Body style={{ padding: 0, position: "relative" }}>
        {/* Floating Close Button */}
        <Button
          variant="light"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          ✕
        </Button>

        <Row className="g-0" style={{ height: "100%" }}>
          {/* Left Image Section */}
          <Col
            md={6}
            style={{
              padding: 0,
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <img
              src="/assets/Callback.png"
              alt="Request Callback"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "0.3rem",
                borderBottomLeftRadius: "0.3rem",
              }}
            />
          </Col>

          {/* Right Form Section */}
          <Col
            md={6}
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderTopRightRadius: "0.3rem",
              borderBottomRightRadius: "0.3rem",
            }}
          >
            <h4 className="mb-4 text-center">Request a Callback</h4>

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

              <Button variant="primary" type="submit" className="w-100 mt-2">
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
