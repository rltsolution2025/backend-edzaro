import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import './InsideProgram.css';

const programData = {
  "cloud-developer": {
    title: "Cloud Developer Program",
    image: "/assets/Cloud.png",
    overview: "A 9-course track designed to prepare you for a career as a cloud developer in less than one year...",
    salary: "4.5 LPA – 15 LPA",
    quarters: [
      {
        title: "Quarter 1",
        color: "primary",
        textColor: "white",
        courses: [
          "Introduction to Cloud Foundations (AWS basics, IAM, networking, serverless)",
          "Developer Fundamentals (Python, Git, OOP, AWS AI integration)",
          "AWS Cloud Operations 1 (Linux, scripting, DevOps basics)",
        ],
      },
      {
        title: "Quarter 2",
        color: "success",
        textColor: "white",
        courses: [
          "AWS Cloud Fundamentals 1 (Compute, Storage, DBs, Security)",
          "AI for Developers (AWS Bedrock, LangChain, RAG)",
          "Developer Intermediate 1 + Capstone 1 (Django, microservices, onboarding app)",
        ],
      },
      {
        title: "Quarter 3",
        color: "warning",
        textColor: "dark",
        courses: [
          "AWS Cloud Fundamentals 2 (Serverless, CI/CD, DevSecOps)",
          "AWS Cloud Operations 2 (IaC, CDK, monitoring & troubleshooting)",
          "Developer Intermediate 2 + Capstone 2 (React + Serverless App, Scheduler project)",
        ],
      },
    ],
  },
  "ai-developer": {
    title: "AI Application Developer Track",
    image: "/assets/AI.png",
    overview: "A program designed to make you an AI-powered app developer, integrating AWS AI services into real-world solutions...",
    salary: "4.5 LPA – 15 LPA",
    quarters: [
      {
        title: "Quarter 1",
        color: "primary",
        textColor: "white",
        courses: [
          "Foundations of AI & ML (ML basics, supervised learning, Python libraries)",
          "Cloud Foundations for AI Developers",
        ],
      },
      {
        title: "Quarter 2",
        color: "success",
        textColor: "white",
        courses: [
          "Building AI Apps with AWS AI Services",
          "LangChain & RAG Systems",
          "Capstone Project 1 - AI Chatbot",
        ],
      },
      {
        title: "Quarter 3",
        color: "warning",
        textColor: "dark",
        courses: [
          "MLOps & Deployment (SageMaker, CI/CD for ML models)",
          "AI Application Security",
          "Capstone Project 2 - AI Recommendation Engine",
        ],
      },
    ],
  },
};

const InsideProgram = () => {
  const { programId } = useParams();
  const program = programData[programId] || programData["cloud-developer"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inside-program-page"
    >
      {/* Hero Section */}
      <section className="program-hero-section position-relative text-white ">
        <div className="hero-bg-shape shape-1"></div>
        <div className="hero-bg-shape shape-2"></div>
        <div className="hero-bg-shape shape-3"></div>

        <Container className="text-center position-relative z-2">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 fw-bold mb-3"
          >
            {program.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead"
          >
            {program.overview}
          </motion.p>

          {/* Salary Highlight */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="salary-highlight mt-4"
          >
            <Badge bg="warning" text="dark" className="p-3 fs-5 fw-bold shadow">
              Potential Salary: {program.salary}
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Program Overview */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.img
              src={program.image}
              alt={program.title}
              className="img-fluid rounded shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-3">{program.title}</h3>
            <p>{program.overview}</p>
            <ul className="list-unstyled">
              <li>Weekly modules with assessments (85% pass required)</li>
              <li>Instructor-led sessions & recordings</li>
              <li>Hands-on AWS lab challenges</li>
              <li>Capstone projects solving real business scenarios</li>
              <li>AWS Certification vouchers included</li>
            </ul>
          </Col>
        </Row>

        {/* Program Quarters */}
        <h3 className="text-center mb-4">Program Breakdown</h3>
        <Row>
          {program.quarters.map((q, idx) => (
            <Col md={4} key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`mb-4 card shadow-sm border-0`}
              >
                <Card.Header className={`bg-${q.color} text-${q.textColor}`}>
                  <h5 className="mb-0">{q.title}</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    {q.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                  {/* <motion.img
                    src={`https://via.placeholder.com/150x80/${q.color === 'primary' ? '007bff' : q.color === 'success' ? '28a745' : 'ffc107'}/ffffff?text=Course+Image`}
                    alt="Course Image"
                    className="img-fluid mt-3 rounded"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  /> */}
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default InsideProgram;
