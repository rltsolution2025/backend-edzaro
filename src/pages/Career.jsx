import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import CareerJourney from "./CareerJourney";


const Career = () => {
  const cards = [
    {
      title: "AWS Certifications",
      img: '/assets/AWS.png',
      points: [
        "Cloud Practitioner",
        "AI Practitioner",
        "Developer – Associate",
        "Exam prep & vouchers included",
      ],
    },
    {
      title: "Capstone Projects",
      img: '/assets/Capstone.png',
      points: [
        "Customer Onboarding App",
        "Appointment Scheduler App",
        "Serverless AWS Integration",
        "End-to-end real-world solutions",
      ],
    },
    {
      title: "Job Readiness",
      img: "/assets/CRT.png",
      points: [
        "Cloud & DevOps skills employers need",
        "Hands-on AWS labs",
        "Portfolio of real projects",
        "Career-focused learning path",
      ],
    },
  ];

  const stats = [
    { label: "Career Track", value: "9 Courses", color: "#0d6efd" },
    { label: "Capstone Projects", value: "2", color: "#198754" },
    { label: "AWS Certifications", value: "3+", color: "#0dcaf0" },
    { label: "Career Launch", value: "1 Year", color: "#ffc107" },
  ];

  const timeline = [
    "Quarter 1: Foundations (AWS, Python, DevOps Basics)",
    "Quarter 2: AI, Microservices, Capstone 1",
    "Quarter 3: Advanced Cloud, Capstone 2",
    "Graduation: Certifications & Job-Readiness",
  ];

  // Floating blob animation variants
  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      
      {/* INTRO SECTION */}
      <section className="position-relative overflow-hidden py-5" style={{ background: "#e6f2ff" }}>
        {/* Floating blobs */}
        <motion.div
          className="position-absolute rounded-circle"
          style={{ width: 250, height: 250, background: "#a7d8ff", top: "-60px", right: "-60px", opacity: 0.3 }}
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="position-absolute rounded-circle"
          style={{ width: 180, height: 180, background: "#cfeeff", bottom: "-40px", left: "-40px", opacity: 0.25 }}
          variants={blobVariants}
          animate="animate"
        />

        <Container className="position-relative text-center z-1">
          <Row className="mb-4">
            <Col md={10} className="mx-auto">
              <h1 className="fw-bold display-5 text-dark mb-3">Career Services</h1>
              <p className="lead text-muted fs-5">
                Gain the skills, credentials, and hands-on experience to launch a
                successful career as a <strong>Cloud Application Developer</strong>.
                With <strong>labs, certification vouchers, and two capstone projects</strong>,
                you’ll graduate ready for real-world roles.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CARDS SECTION */}
      <section className="position-relative py-5" style={{ background: "#f7fbff" }}>
  <Container>
    <Row className="g-4 mb-4">
      {cards.map((item, i) => (
        <Col md={4} key={i} className="d-flex">
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="h-100 w-100"
          >
            <Card className="shadow-lg h-100 w-100 border-0 rounded-4 overflow-hidden d-flex flex-column">
              <div className="card-img-wrapper" style={{ flex: "0 0 220px", overflow: "hidden" }}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <Card.Body className="p-4 flex-grow-1 d-flex flex-column">
                <Card.Title className="fw-bold fs-4 mb-3 text-primary">{item.title}</Card.Title>
                <ul className="list-unstyled text-muted small mb-0 flex-grow-1">
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
  </Container>
</section>



      {/* STATS SECTION */}
      <section className="position-relative py-5" style={{ background: "#fffaf2" }}>
        <Container>
          <Card className="border-0 shadow-lg bg-white rounded-4">
            <Card.Body className="py-5 text-center position-relative">
              <h3 className="fw-bold mb-5">Career Outcomes with AWS Cloud Institute</h3>
              <Row className="g-4">
                {stats.map((stat, i) => (
                  <Col md={3} key={i}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className="d-flex flex-column align-items-center justify-content-center shadow-lg"
                      style={{
                        width: 120,
                        height: 120,
                        margin: "0 auto",
                        borderRadius: "50%",
                        background: stat.color,
                        color: "#fff",
                      }}
                    >
                      <span className="fw-bold fs-5">{stat.value}</span>
                      <small>{stat.label}</small>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* TIMELINE SECTION */}
     <CareerJourney />

    </motion.div>
  );
};

export default Career;
