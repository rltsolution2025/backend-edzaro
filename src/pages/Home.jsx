import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react"; 
import ComparisonTable from '../components/ComparisonTable';

const Home = () => {
  const courses = [
    {
      title: "Web Development Bootcamp",
      text: "Learn HTML, CSS, JavaScript, React, and Node.js. Build responsive websites from scratch.",
      img: "/assets/Web-Dev.png",
      btn: "success",
    },
    {
      title: "Gen AI",
      text: "Master Flutter or React Native for iOS and Android apps. Hands-on projects included.",
      img: "/assets/AI-Dev.png",
      btn: "danger",
    },
    {
      title: "Full-Stack Development",
      text: "End-to-end training: Frontend, Backend, Databases, and Deployment with AWS.",
      img: "/assets/Full-Dev.png",
      btn: "warning",
    },
    {
      title: "Data Science & AI",
      text: "Python, Machine Learning, Deep Learning, and AI projects for real-world problems.",
      img: "/assets/Data.png",
      btn: "primary",
    },
  ];

 const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Access Skilled Fresh Talent",
      content: "Ramp up your workforce with ready-to-deploy talent. We source, train, and provide highly skilled candidates that can integrate seamlessly into your teams."
    },
    {
      title: "Build an Exceptional Talent Pool",
      content: "Create a pipeline of talented professionals who are equipped with the right skills to meet your company's future growth demands."
    },
    {
      title: "Enhance Workforce Learning Options",
      content: "Empower employees with continuous learning through workshops, upskilling programs, and hands-on training."
    },
    {
      title: "Create High-Performance Teams",
      content: "Leverage specialized training to build collaborative, productive, and goal-oriented teams."
    },
    {
      title: "Accelerate Employee Growth and Expertise",
      content: "Provide career progression pathways and mentorship opportunities to boost employee retention and performance."
    }
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-5"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1200x600/007bff/ffffff?text=Software+Development+Training)' }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Master Software Development</h1>
              <p className="lead">Join Edzaro's comprehensive training programs in web, mobile, and full-stack development. From beginners to pros, build real-world skills with expert mentors.</p>
              <Button variant="light" size="lg" className="me-2">Enroll Now</Button>
              <Button variant="outline-light" size="lg">Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="https://via.placeholder.com/500x300/ffffff/007bff?text=Hero+Image" alt="Hero" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </motion.section> */}

     <Container className="py-5">
  <Row className="align-items-center">
    
    {/* Left Content Section */}
    <Col lg={6} className="mb-4 mb-lg-0">
      <h1 className="fw-bold">
        Learn Like You Would <br /> At India’s Top Tech Companies.
      </h1>
      <p className="text-muted fs-5">
        Work-experience based learning programs to land your dream tech job
      </p>
      <p className="fs-6">
        <strong>Build</strong> professional projects like the top 1% tech professionals.<br />
        <strong>Master</strong> the latest Fullstack/Backend/Automation tech with real work-ex.<br />
        <strong>Crack</strong> your dream role at the best tech companies.
      </p>
      <Button variant="success" className="mt-3">
        Upskill with Edzaro
      </Button>
      
      {/* Example stats row */}
      <Row className="mt-4 text-center">
        <Col><h5>88%</h5><p>Completion Rate</p></Col>
        <Col><h5>10 LPA</h5><p>Avg Salary</p></Col>
        <Col><h5>21 LPA</h5><p>Highest Salary</p></Col>
        <Col><h5>1000+</h5><p>Students</p></Col>
        <Col><h5>77%</h5><p>Placement Rate</p></Col>
      </Row>
    </Col>
    
    {/* Right Form Section */}
    <Col lg={6}>
      <div className="p-4 bg-white rounded shadow-sm">
        <Form>
          {/* <Form.Group className="mb-3"> */}
            {/* <Form.Control type="text" placeholder="Program interested" />
          </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Phone +91" />
          </Form.Group>
          <Form.Group className="mb-3 form-check">
            <Form.Check type="checkbox" label="I agree to receive SMS & WhatsApp communications on this number." />
          </Form.Group>
          <Button variant="warning" className="w-100">
            Book Your Trial
          </Button>
        </Form>
      </div>
    </Col>
  </Row>
</Container>




      {/* Courses Overview */}
       <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-5"
    >
      <Container>
        <h2 className="text-center mb-5">
          Our Software Development Courses
        </h2>
        <Row>
          {courses.map((course, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex"
            >
              <div className="course-card shadow-sm">
                <Card className="border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={course.img}
                    alt={course.title}
                    className="img-fluid"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <div className="overlay-content">
                      <h5>{course.title}</h5>
                      <Button variant="light" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CSS for hover overlay */}
      <style>{`
        .course-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-6px);
        }

        .course-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .course-card:hover .overlay {
          opacity: 1;
        }

        .overlay-content h5 {
          margin-bottom: 10px;
        }
      `}</style>
    </motion.section>

      {/* Inside the Program Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-light py-5"
      >
        <Container>
          <h2 className="text-center mb-5">Inside the Edzaro Program</h2>
          <Row>
            <Col md={6}>
              <img src="https://via.placeholder.com/500x300/6f42c1/ffffff?text=Classroom+Training" alt="Training" className="img-fluid rounded mb-3" />
            </Col>
            <Col md={6}>
              <p>Our 12-week intensive program includes live coding sessions, real-world projects, mentorship from industry experts, and career placement support. 90% of graduates land jobs in top tech firms.</p>
              <ul>
                <li>Weekly assignments and code reviews</li>
                <li>Access to our online platform for 24/7 learning</li>
                <li>Certifications in high-demand skills</li>
              </ul>
              <Button variant="primary">Join the Program</Button>
            </Col>
          </Row>
        </Container>
      </motion.section>

       <section className="hybrid-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6} className="text-white mb-4 mb-md-0">
            <h2 className="fw-bold">Hi-Tech Hi-Touch Hybrid Learning Platform</h2>
            <p>
              <a href="#" className="fw-bold text-white text-decoration-underline">
                iPearl.ai
              </a>{" "}
              (AI-Powered Interactive Platform for Experiential And Remote Learning),
              TalentSprint’s Digital Delivery Platform, truly open by design, is built
              on Open edX and has been architected to incorporate best-of-breed
              technologies and state-of-the-art components.
            </p>
            <p>
              The hallmark of the platform is its seamless integration of diverse but
              related learning technologies that facilitates synchronous learning,
              asynchronous learning, assignments, assessments, group work, cloud labs,
              and video indexing, with just one single sign-on. This maximizes user
              delight, for both students and instructors.
            </p>
          </Col>



          {/* Right Column - Image */}
          <Col md={6} className="text-center">
            <img
              src="/assets/E-Learn.png"
              alt="Hybrid Learning"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>

      {/* Styling */}
      <style>{`
        .hybrid-section {
          background: linear-gradient(90deg, #4b0082, #800080);
          color: #fff;
        }

        .hybrid-section h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .hybrid-section p {
          font-size: 1rem;
          line-height: 1.6;
        }

        .hybrid-section img {
          max-width: 90%;
          transition: transform 0.3s ease;
        }

        .hybrid-section img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>

<div className="d-flex w-full max-w-screen-xl mx-auto  p-8 bg-white shadow-lg rounded-2xl gap-10">
  {/* LEFT SIDE CONTENT - 75% of the screen */}
  <div className="w-3/4 p-5">
    <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
      Customized L&D Solutions for Corporates
    </h3>

    <div className="space-y-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border-b pb-2 cursor-pointer"
          onClick={() => toggleSection(index)}
        >
          <div className="flex justify-between items-center">
            <h5 className="text-lg md:text-xl font-medium">{section.title}</h5>
            {openIndex === index ? (
              <ChevronUp className="text-purple-700 w-5 h-5" />
            ) : (
              <ChevronDown className="text-purple-700 w-5 h-5" />
            )}
          </div>

          {openIndex === index && (
            <p className="mt-1 text-gray-600 text-sm md:text-base">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT SIDE IMAGE - 25% of the screen */}
  <div className="w-1/4 flex justify-center">
    <img
      src="/assets/corporate.png"
      alt="Corporate Team"
      className="rounded-2xl shadow-md w-64 h-48 object-cover"
    />
  </div>
</div>





      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"Edzaro transformed my career from zero to software engineer!"</p>
                  <Card.Text className="fw-bold">John Doe, Web Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"Hands-on training and great mentors. Highly recommend!"</p>
                  <Card.Text className="fw-bold">Jane Smith, Full-Stack Dev</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow">
                <Card.Body>
                  <i className="bi bi-quote display-6 text-primary mb-3"></i>
                  <p>"From mobile apps to deployment—Edzaro covers it all."</p>
                  <Card.Text className="fw-bold">Alex Johnson, App Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ComparisonTable />
      </section>
    </div>
  );
};

export default Home;