import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const InsideProgram = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <Container>
        <h1 className="text-center mb-5">Inside Our Program</h1>
        
        {/* Curriculum Overview */}
        <Row className="mb-5">
          <Col md={6}>
            <motion.img 
              src="https://via.placeholder.com/500x350/4e73df/ffffff?text=Program+Structure" 
              alt="Program overview showing structured learning path with milestones and progress tracking"
              className="img-fluid rounded shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
          <Col md={6}>
            <h3>12-Week Intensive Curriculum</h3>
            <p>Our comprehensive program is designed to take you from beginner to job-ready developer in just 12 weeks.</p>
            <ul>
              <li>200+ hours of live instruction</li>
              <li>50+ hands-on coding projects</li>
              <li>Daily code reviews and feedback</li>
              <li>Weekly one-on-one mentorship sessions</li>
            </ul>
          </Col>
        </Row>

        {/* Weekly Breakdown */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Weekly Curriculum Breakdown</h3>
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Weeks 1-4: Foundations</h5>
              </div>
              <div className="card-body">
                <p><strong>Topics:</strong> HTML5, CSS3, JavaScript fundamentals, Git & GitHub, Command Line</p>
                <p><strong>Projects:</strong> Personal portfolio website, Calculator app, Weather widget</p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">Weeks 5-8: Intermediate Skills</h5>
              </div>
              <div className="card-body">
                <p><strong>Topics:</strong> React.js, Node.js, Express, MongoDB, REST APIs</p>
                <p><strong>Projects:</strong> Full-stack blog application, Task management system, E-commerce cart</p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">Weeks 9-12: Advanced & Specialization</h5>
              </div>
              <div className="card-body">
                <p><strong>Topics:</strong> Authentication, Deployment (AWS/Heroku), Testing, Advanced React patterns</p>
                <p><strong>Projects:</strong> Capstone project of your choice, Real-world client project, Open source contribution</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Learning Approach */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-center mb-4">Our Learning Methodology</h3>
            <Row>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3"
                >
                  <i className="bi bi-laptop display-4 text-primary mb-3"></i>
                  <h5>Live Coding Sessions</h5>
                  <p>Interactive live classes with industry experts, 4 hours daily</p>
                </motion.div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3"
                >
                  <i className="bi bi-code-square display-4 text-success mb-3"></i>
                  <h5>Project-Based Learning</h5>
                  <p>Build real applications that you can showcase in your portfolio</p>
                </motion.div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3"
                >
                  <i className="bi bi-people display-4 text-info mb-3"></i>
                  <h5>Peer Collaboration</h5>
                  <p>Work in teams, participate in code reviews, and learn from others</p>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default InsideProgram;