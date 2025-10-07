import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react"; 
import ComparisonTable from '../components/ComparisonTable';
import EnrollForm from '../components/EnrollForm';
import { FaHandshake, FaCertificate, FaChalkboardTeacher, FaLaptopCode, FaServer } from "react-icons/fa";
import './Home.css';

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
      title: "Gen AI",
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

   const testimonials = [
    {
      text: "Edzaro transformed my career from zero to software engineer!",
      name: "Dinesh Kumar M",
      role: "Web Developer",
    },
    {
      text: "Hands-on training and great mentors. Highly recommend!",
      name: "Charulata S",
      role: "Full-Stack Developer",
    },
    {
      text: "From mobile apps to deployment—Edzaro covers it all.",
      name: "Akhil P",
      role: "App Developer",
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

    <div className="custom-blue-section ">
  <Container>
    <Row className="align-items-center">
      
      {/* Left Content Section */}
      <Col lg={6} className="mb-4 mb-lg-0 text-dark">
        <h1 className="fw-bold">
  Experience Learning the Way <br /> Top Tech Companies Train.
</h1>
<p className="text-muted fs-5">
  Practical, industry-style programs designed to launch your dream tech career.
</p>
<p className="fs-6">
  <strong>Work on</strong> real-world projects that reflect the standards of top tech talent.<br />
  <strong>Gain expertise</strong> in modern Fullstack, Backend, and Automation technologies through hands-on experience.<br />
  <strong>Secure</strong> top roles at leading technology companies.
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
       <EnrollForm courseName={courses.title} />
    
  {/* Extra Styling */}
  <style>{`
    .rounded-3xl {
      border-radius: 1.5rem !important; /* Extra rounded corners */
    }
    .gap-4 > *:not(:last-child) {
      margin-bottom: 1rem !important; /* Adds gap between inputs */
    }
    .transition {
      transition: all 0.3s ease-in-out;
    }
    .hover\\:shadow-md:hover {
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
    }
  `}</style>
</Col>


    </Row>
  </Container>
</div>
  <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="partnership-section position-relative py-5 text-white"
    >
      {/* Animated background icons */}
      <FaLaptopCode className="bg-icon icon2" />
      <FaServer className="bg-icon icon3" />
      <FaHandshake className="bg-icon icon1" />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-center mb-5">Our Strategic Partnerships</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.img
              src="https://via.placeholder.com/500x300/ffffff/6f42c1?text=Partnerships"
              alt="Partnerships"
              className="img-fluid rounded shadow"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
          <Col md={6}>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Edzaro proudly partners with <strong>TalentSprint</strong>, part of <strong>Accenture</strong>, to deliver cutting-edge technology programs. We are also a recognized partner of the <strong>Tamil Nadu Skill Development Corporation (TNSDC)</strong>, empowering students with industry-relevant skills and career opportunities.
            </motion.p>
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="list-unstyled"
            >
              <li className="mb-2">
                <FaChalkboardTeacher className="me-2" /> Industry-aligned curriculum
              </li>
              <li className="mb-2">
                <FaHandshake className="me-2" /> Mentorship from top experts
              </li>
              <li className="mb-2">
                <FaCertificate className="me-2" /> Certifications and skill development
              </li>
            </motion.ul>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* <Button variant="light" className="mt-3 text-purple fw-bold">
                Explore Partnerships
              </Button> */}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>

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
          <Card className="course-card border-0 shadow-sm position-relative">
            {/* Image Section (30% height) */}
            <div className="course-img-wrapper">
              <Card.Img
                variant="top"
                src={course.img}
                alt={course.title}
                className="course-img"
              />
            </div>

            {/* Bottom Content Section */}
            <Card.Body className="d-flex flex-column justify-content-between text-center course-content">
              <h5 className="mb-3">{course.title}</h5>
              <p className="text-muted">
                {course.description || "Short description about this course goes here."}
              </p>
              <Button variant="primary" size="sm" className="mt-auto">
                View Details
              </Button>
            </Card.Body>

            {/* Full Hover Overlay (covers full card) */}
            <div className="full-overlay d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="text-white mb-2">{course.title}</h5>
              <p className="text-light small mb-3">
                {course.description || "Short description about this course goes here."}
              </p>
              <div className="d-flex flex-column" style={{ borderRadius: "20%" }}>
              <Button variant="light" size="sm" className="mb-2">
                View Program
              </Button>
              <Button variant="light" size="sm" className="mb-2">
                <i className="bi bi-download me-1"></i> Download Brochure
              </Button>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>

  {/* CSS */}
  <style>{`
    .course-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      transition: transform 0.3s ease;
    }

    .course-card:hover {
      transform: translateY(-6px);
    }

    /* Image takes 30% of card height */
    .course-img-wrapper {
      flex: 0 0 30%;
      min-height: 100px;
      max-height: 160px;
      width: 100%;
      overflow: hidden;
    }

    .course-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }

    .course-card:hover .course-img {
      transform: scale(1.05);
    }

    /* Bottom Content always visible */
    .course-content {
      flex: 1;
      padding: 1rem;
      background-color: #e6f2ff;
      text-align: center;
      z-index: 1;
      position: relative;
      transition: opacity 0.25s ease;
    }

    /* Overlay hidden by default */
    .full-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      z-index: 3;
      transform: translateY(100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.35s ease, opacity 0.35s ease, visibility 0.35s;
      pointer-events: none;
    }

    /* Show overlay on hover (covers full card) */
    .course-card:hover .full-overlay {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    /* Fade bottom content slightly when overlay is active */
    .course-card:hover .course-content {
      opacity: 0.15;
    }
  `}</style>
</motion.section>
   {/* Inside the Program Section */}
    

       <section className="hybrid-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6} className="text-white mb-4 mb-md-0">
            <h2 className="fw-bold">iPearl.Ai Hybird Learning Platform</h2>
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
       <section className="testimonial-section py-5 position-relative overflow-hidden">
      {/* Floating shapes for background depth */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-6 fw-bold text-white">What Our Students Say</h2>
          <p className="text-light lead">
            Real stories from learners who grew their careers with Edzaro.
          </p>
        </motion.div>

        <Row>
          {testimonials.map((t, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="testimonial-card text-center border-0 shadow-lg h-100">
                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="quote-icon mb-3">
                        <i className="bi bi-quote display-5 text-primary"></i>
                      </div>
                      <p className="fst-italic text-secondary">"{t.text}"</p>
                    </div>
                    <div className="mt-4">
                      <Card.Text className="fw-bold text-dark mb-0">{t.name}</Card.Text>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        /* 🌈 Background Gradient */
        .testimonial-section {
          background: linear-gradient(135deg, #517cbbff, #65b0fcff, #398ef0ff);
          background-size: 200% 200%;
          animation: gradientMove 16s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* 🌀 Floating Shapes */
        .floating-shape {
          position: absolute;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: float 10s ease-in-out infinite;
          filter: blur(30px);
        }

        .shape-1 {
          width: 250px;
          height: 250px;
          top: -80px;
          left: -80px;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -100px;
          right: -60px;
          animation-delay: 4s;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }

        /* 🧭 Testimonial Card */
        .testimonial-card {
          background: #ffffff;
          border-radius: 16px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        /* ✨ Quote Icon Animation */
        .quote-icon i {
          display: inline-block;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
       <ComparisonTable />
    </div>
  );
};

export default Home;