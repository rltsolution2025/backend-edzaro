import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5 bg-light"
    >
      <Container>
        {/* Intro Section */}
        <Row className="mb-5">
          <Col md={10} className="mx-auto text-center">
            <h1 className="fw-bold display-5 text-dark mb-3">
              Career Services
            </h1>
            <p className="lead text-muted fs-5">
              Gain the skills, credentials, and hands-on experience to launch a
              successful career as a <strong>Cloud Application Developer</strong>.
              With <strong>labs, certification vouchers, and two capstone
              projects</strong>, you’ll graduate ready for real-world roles.
            </p>
          </Col>
        </Row>

        {/* Career Support Cards */}
        <Row className="g-4 mb-5">
          {[
            {
              title: "AWS Certifications",
              img: "https://via.placeholder.com/400x250/28a745/ffffff?text=AWS+Certifications",
              points: [
                "Cloud Practitioner",
                "AI Practitioner",
                "Developer – Associate",
                "Exam prep & vouchers included",
              ],
            },
            {
              title: "Capstone Projects",
              img: "https://via.placeholder.com/400x250/007bff/ffffff?text=Capstone+Projects",
              points: [
                "Customer Onboarding App",
                "Appointment Scheduler App",
                "Serverless AWS Integration",
                "End-to-end real-world solutions",
              ],
            },
            {
              title: "Job Readiness",
              img: "https://via.placeholder.com/400x250/fd7e14/ffffff?text=Job+Readiness",
              points: [
                "Cloud & DevOps skills employers need",
                "Hands-on AWS labs",
                "Portfolio of real projects",
                "Career-focused learning path",
              ],
            },
          ].map((item, i) => (
            <Col md={4} key={i}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-100"
              >
                <Card className="shadow-sm h-100 border-0 rounded-3 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="object-fit-cover"
                    style={{ height: "220px" }}
                  />
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold fs-4 mb-3">
                      {item.title}
                    </Card.Title>
                    <ul className="list-unstyled text-muted small mb-0">
                      {item.points.map((point, idx) => (
                        <li key={idx}>✓ {point}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Success Stats */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-sm bg-white rounded-3">
              <Card.Body className="py-5 text-center">
                <h3 className="fw-bold mb-5">
                  Career Outcomes with AWS Cloud Institute
                </h3>
                <Row className="g-4">
                  {[
                    { label: "Career Track", value: "9 Courses", color: "primary" },
                    { label: "Capstone Projects", value: "2", color: "success" },
                    { label: "AWS Certifications", value: "3+", color: "info" },
                    { label: "Career Launch", value: "1 Year", color: "warning" },
                  ].map((stat, i) => (
                    <Col md={3} key={i}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`bg-${stat.color} text-$
                          {stat.color === "warning" ? "dark" : "white"} rounded-circle d-flex flex-column align-items-center justify-content-center shadow`}
                        style={{ width: "120px", height: "120px", margin: "0 auto" }}
                      >
                        <span className="fw-bold fs-5">{stat.value}</span>
                        <small>{stat.label}</small>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Career Timeline */}
        <Row>
          <Col md={8} className="mx-auto">
            <h3 className="fw-bold text-center mb-4">
              Your Career Journey with AWS Cloud Institute
            </h3>
            <ListGroup variant="flush" className="shadow-sm rounded-3">
              {["Quarter 1: Foundations (AWS, Python, DevOps Basics)",
                "Quarter 2: AI, Microservices, Capstone 1",
                "Quarter 3: Advanced Cloud, Capstone 2",
                "Graduation: Certifications & Job-Readiness",
              ].map((item, idx) => (
                <ListGroup.Item
                  key={idx}
                  className="d-flex justify-content-between align-items-center py-3 px-4"
                >
                  <span className="fw-medium text-muted">{item}</span>
                  <Button size="sm" variant="outline-primary" className="rounded-pill px-3">
                    Details
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Career;
