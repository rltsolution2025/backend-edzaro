import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';
import RLTTreeBootstrap from '../components/OrgTree';
import OurStory from '../components/OurStory';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero-section position-relative ">
        {/* Subtle background shapes */}
        <div className="bg-shape-hero shape-1"></div>
        <div className="bg-shape-hero shape-2"></div>

        <Container>
          <Row className="align-items-center">
            {/* Left Illustration */}
            <Col lg={6} className="mb-4 mb-lg-0 d-flex justify-content-center">
              <div className="about-illustration position-relative">
                <div className="floating-bubble bubble-1">
                  {/* <i className="bi bi-building display-5 text-primary"></i> */}
                </div>
                <div className="floating-bubble bubble-2">
                  {/* <i className="bi bi-laptop display-5 text-success"></i> */}
                </div>
                <div className="floating-bubble bubble-3">
                  {/* <i className="bi bi-people-fill display-5 text-info"></i> */}
                </div>
                {/* <img
                  src="/assets/Aboutus.png"
                  alt="About RLT Group"
                  className="img-fluid rounded-4 shadow-sm"
                /> */}
                <RLTTreeBootstrap />
              </div>
            </Col>

            {/* Right Text */}
            <Col lg={6}>
              <h1 className="fw-bold display-5 mb-3">
                About <span className="brand">RLT Group</span>
              </h1>
              <p className="lead mb-4 text-dark">
                Founded in <strong>1995</strong>, RLT Group has been a pioneer in instrumentation, water management, and education.  
                Today, we are expanding into software training with a strategic partnership with <strong>TalentSprint</strong>, 
                part of Accenture, empowering the next generation of tech professionals.
              </p>

              <ul className="list-unstyled about-benefits mb-4 text-dark">
                <li>
                  <i className="bi bi-laptop-fill me-2 fs-5 text-primary"></i>
                  Industry-Relevant Software Training
                </li>
                <li>
                  <i className="bi bi-award-fill me-2 fs-5 text-success"></i>
                  Mentorship by Experts from TalentSprint & Accenture
                </li>
                <li>
                  <i className="bi bi-people-fill me-2 fs-5 text-info"></i>
                  Holistic Learning Environment
                </li>
                <li>
                  <i className="bi bi-briefcase-fill me-2 fs-5 text-warning"></i>
                  Career-Focused Skill Development
                </li>
              </ul>

              <button className="btn btn-primary btn-lg fw-semibold">
                Learn More
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
              <p className="text-muted">
                Driving excellence across industries and empowering the next generation through quality training and mentorship.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="card h-100 border-0 shadow-sm p-4 text-center bg-light rounded-4"
              >
                <img src="/assets/Mission.png" alt="Mission Icon" className="mb-3" style={{ width: '80px' }} />
                <h4 className="mb-3">Our Mission</h4>
                <p className="text-muted">
                  To provide holistic training across instrumentation, water management, schools, 
                  and now software education, empowering individuals to excel in their careers.
                </p>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="card h-100 border-0 shadow-sm p-4 text-center bg-light rounded-4"
              >
                <img src="/assets/Vision.png" alt="Vision Icon" className="mb-3" style={{ width: '80px' }} />
                <h4 className="mb-3">Our Vision</h4>
                <p className="text-muted">
                  To be recognized as the most trusted provider of innovative education and training, bridging industry needs with human potential across multiple domains.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      {/* <section className="our-story-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
          
            <Col md={12}>
  <h3 className="mb-4">Our Success Story</h3>
  <p>
    In the year <strong>1995</strong>, a visionary leader, <strong>Dr. G. P. Thirumurugan</strong>, laid the foundation for what would become the <strong>RLT Group</strong>. A former <strong>Vice President of Larsen & Toubro (L&amp;T) India</strong>, Dr. Thirumurugan was not only an accomplished engineer but also a passionate educator. His deep love for learning and teaching, combined with his strong technical expertise, inspired him to create an organization that could make a meaningful difference in society.
  </p>
  <p>
    With just <strong>six dedicated individuals</strong> and an unshakable vision, RLT Group began its journey in the fields of <strong>instrumentation</strong> and <strong>water management</strong>. These humble beginnings were fueled by determination, integrity, and a commitment to excellence. Dr. Thirumurugan firmly believed that knowledge and innovation are the true drivers of progress, and he built RLT on this powerful philosophy.
  </p>
  <p>
    As the organization grew, Dr. Thirumurugan turned his attention to education—his true passion. He established schools that quickly became known for their <strong>high academic standards</strong> and <strong>remarkable student success rates</strong>. These institutions weren’t just schools; they were places where young minds were nurtured, inspired, and empowered to achieve their full potential. His vision was clear: to build a strong foundation of learning that could shape future generations.
  </p>
  <p>
    Over the years, RLT Group continued to expand its horizons, venturing into new domains and taking on <strong>prestigious government projects</strong>. What started as a small team has now grown into a thriving group with <strong>250+ talented employees</strong>, all united by a shared purpose and commitment to excellence. Each milestone in this journey has been a testament to perseverance, innovation, and the power of collective effort.
  </p>
  <p>
    Today, RLT Group stands at the forefront of <strong>education, technology, and skill development</strong>. Through our brand <strong>Edzaro</strong> and a strategic partnership with <strong>TalentSprint</strong>, we are bringing world-class <strong>software training, mentorship, and industry-aligned programs</strong> to aspiring professionals. Our goal is to empower the next generation of tech leaders, helping them build meaningful careers and shape the future of innovation.
  </p>
  <p>
    From a modest beginning with six people to a flourishing organization impacting thousands, the RLT journey is a story of <strong>passion, vision, and unstoppable growth</strong>. And this is only the beginning — we continue to grow <strong>year after year</strong>, guided by our founder’s values and our unwavering belief in the power of education and technology to transform lives.
  </p>
</Col>

          </Row>
        </Container>
      </section> */}
      <section className="our-story-section py-5 bg-light"> <OurStory /> </section>
      
      {/* Leadership & Stats Section */}
      <section className="leadership-stats-section py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h3 className="fw-bold mb-4">Meet Our Leadership Team</h3>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={4} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/300x300/007bff/ffffff?text=CEO" />
                <Card.Body>
                  <Card.Title>Sarah Johnson</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">CEO & Founder</Card.Subtitle>
                  <Card.Text>25+ years of leadership in education and professional training.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/300x300/28a745/ffffff?text=CTO" />
                <Card.Body>
                  <Card.Title>Michael Chen</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">CTO</Card.Subtitle>
                  <Card.Text>Expert in scalable training solutions and tech platforms.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/300x300/dc3545/ffffff?text=COO" />
                <Card.Body>
                  <Card.Title>Maria Rodriguez</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">COO</Card.Subtitle>
                  <Card.Text>Oversees operations across all business verticals.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mx-auto">
              <h3 className="text-center mb-4">By the Numbers</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent border-0">
                  <span>Years in Industry</span>
                  <strong className="text-primary">28+</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent border-0">
                  <span>Students Trained</span>
                  <strong className="text-success">4,500+</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent border-0">
                  <span>Countries Served</span>
                  <strong className="text-info">15</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent border-0">
                  <span>Partner Companies</span>
                  <strong className="text-warning">120+</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent border-0">
                  <span>Graduation Rate</span>
                  <strong className="text-danger">94%</strong>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default AboutUs;
