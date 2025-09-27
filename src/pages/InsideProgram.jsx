import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const programData = {
  "cloud-developer": {
    title: "Cloud Application Developer Track",
    image:
      "https://via.placeholder.com/500x350/4e73df/ffffff?text=Cloud+Developer+Program",
    overview:
      "A 9-course track designed to prepare you for a career as a cloud developer in less than one year...",
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
    image:
      "https://via.placeholder.com/500x350/fd7e14/ffffff?text=AI+Developer+Program",
    overview:
      "A program designed to make you an AI-powered app developer, integrating AWS AI services into real-world solutions...",
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
      className="py-5"
    >
      <Container>
        <h1 className="text-center mb-5">{program.title}</h1>

        {/* Program Overview */}
        <Row className="mb-5">
          <Col md={6}>
            <motion.img
              src={program.image}
              alt={program.title}
              className="img-fluid rounded shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
          <Col md={6}>
            <h3>{program.title}</h3>
            <p>{program.overview}</p>
            <ul>
              <li>Weekly modules with assessments (85% pass required)</li>
              <li>Instructor-led sessions & recordings</li>
              <li>Hands-on AWS lab challenges</li>
              <li>Capstone projects solving real business scenarios</li>
              <li>AWS Certification vouchers included</li>
            </ul>
          </Col>
        </Row>

        {/* Quarters Breakdown */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Program Breakdown</h3>
            {program.quarters.map((q, idx) => (
              <Card className="mb-3 shadow-sm" key={idx}>
                <Card.Header className={`bg-${q.color} text-${q.textColor}`}>
                  <h5 className="mb-0">{q.title}</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    {q.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default InsideProgram;
