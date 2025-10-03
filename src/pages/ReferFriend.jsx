import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import './Refer.css';
import { submitReference } from './Api/Api'; // import the API function

const ReferFriend = () => {
  const [formData, setFormData] = React.useState({
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    programInterested: "",
    referredBy: "",
    status: "Pending",
  });
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    try {
          await submitReference(formData);
          setMessage("✅ Thank you! We'll get in touch soon.");
          setFormData({ refereeName: "", refereeEmail: "", refereePhone: "", programInterested: "", referredBy: "", status: "Pending" });
        } catch (error) {
          setMessage(`❌ ${error.message || "Error submitting form."}`);
        }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5 refer-bg"
    >
      <section className="refer-section animated-bg-refer py-5">
  {/* Decorative background shape */}
  <div className="refer-shape"></div>

  <div className="container hero-content">
    <div className="row align-items-center">
      {/* LEFT ILLUSTRATION */}
      <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
        <div className="refer-illustration position-relative">
          <div className="floating-bubble bubble-1">
            <i className="bi bi-person-plus-fill display-6"></i>
          </div>
          <div className="floating-bubble bubble-2">
            <i className="bi bi-gift-fill display-6"></i>
          </div>
          <div className="floating-bubble bubble-3">
            <i className="bi bi-megaphone-fill display-6"></i>
          </div>
          <img
            src="/assets/Refer&Earn.png"
            alt="Refer a Friend"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: '320px' }}
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="col-md-6 text-dark">
        <h1 className="fw-bold display-5">
           Refer Your <span className="brand">Friends</span> & Earn Rewards!
        </h1>
        <p className="lead mt-3">
          Invite your friends to join <strong>Edzaro</strong> and help them kickstart their 
          learning journey. For every successful referral, you earn exciting rewards 
          and help build our growing community of learners.
        </p>

        <button className="btn btn-primary btn-lg mt-3 fw-semibold">
          Refer Now
        </button>
      </div>
    </div>
  </div>
</section>

      <Container>
        {/* Heading */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            {/* <motion.h1
              className="mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Refer a Friend
            </motion.h1> */}
            {/* <motion.p
              className="lead"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Share the Edzaro experience with your friends and earn rewards! Both you and
              your friend will receive special benefits.
            </motion.p> */}
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-5">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/4202/4202842.png",
              title: "Rs. 20000 Credit for You",
              text: "Get 20000 off your next course when your friend enrolls",
              color: "primary",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
              title: "Rs.10000 Off for Friend",
              text: "Your friend gets 10000 off their first course enrollment",
              color: "success",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
              title: "Extra Rewards",
              text: "Refer 3+ friends and get exclusive mentorship sessions",
              color: "warning",
            },
          ].map((item, i) => (
            <Col md={4} className="mb-4" key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card h-100 text-center shadow border-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="card-body">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    width={70}
                    height={70}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Referral Form */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <Card.Header className="bg-primary text-white">
                  <h4 className="mb-0">Share Your Referral Link</h4>
                </Card.Header>
                <Card.Body>
                  <Form>
  {/* Your Unique Referral Link */}
  {/* <Form.Group className="mb-3">
    <Form.Label>Your Unique Referral Link</Form.Label>
    <div className="input-group">
      <Form.Control
        type="text"
        value="https://edzaro.com/ref/your-unique-code"
        readOnly
      />
      <Button variant="outline-secondary">Copy Link</Button>
    </div>
    <Form.Text className="text-muted">
      Share this link with your friends via email, social media, or messaging apps
    </Form.Text>
  </Form.Group> */}

  {/* Referee Details */}
  <Form.Group className="mb-3">
    <Form.Label>Referee Details</Form.Label>
    <Row className="mb-2">
      <Col md={6} className="mb-2">
        <Form.Control type="text" onChange={handleChange} placeholder="Referee's Name" />
      </Col>
      <Col md={6}>
        <Form.Control type="email" onChange={handleChange} placeholder="Referee's Email" />
      </Col>
    </Row>
    <Form.Control type="text" onChange={handleChange} placeholder="Referee's Phone" className="mb-2" />
    <Form.Select aria-label="Program Interested" className="mb-2">
      <option value="">Select Program Interested</option>
      <option value="aws-cloud">AWS Cloud Program</option>
      <option value="devops">DevOps Program</option>
      <option value="ai-program">AI Program</option>
      <option value="fullstack">Fullstack Development</option>
    </Form.Select>
  </Form.Group>

  {/* Referred By */}
  <Form.Group className="mb-3">
    <Form.Label>Referred By</Form.Label>
    <Form.Control type="text" onChange={handleChange} placeholder="Your Name" />
  </Form.Group>

  <Button variant="primary" onClick={handleSubmit} className="w-100">
    Send Referral Invitation
  </Button>
</Form>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* How it Works */}
       <Row className="how-it-works pb-5 position-relative">
  <Col md={12}>
    <h3 className="text-center mb-4">How It Works</h3>
    <div className="steps-container d-flex justify-content-between align-items-center position-relative">
      {[ 
        { step: "1", title: "Share Your Link", text: "Send your unique referral link to friends", color: "primary" },
        { step: "2", title: "Friend Enrolls", text: "They use your link to sign up for a course", color: "success" },
        { step: "3", title: "Complete Payment", text: "Your friend completes their course payment", color: "info" },
        { step: "4", title: "Get Rewarded", text: "You both receive your discounts automatically", color: "warning" },
      ].map((item, i) => (
        <div key={i} className="step-wrapper position-relative text-center flex-fill">
          {/* Step Circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            className={`step-number bg-${item.color} ${item.color === "warning" ? "text-dark" : "text-white"} rounded-circle d-inline-flex align-items-center justify-content-center mb-2`}
            style={{ width: "55px", height: "55px", fontWeight: "bold", zIndex: 2 }}
          >
            {item.step}
          </motion.div>

          <h6>{item.title}</h6>
          <small>{item.text}</small>

          {/* Connecting Line */}
          {i < 3 && (
            <motion.div
              className={`connector-line`}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 + i * 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  </Col>

  <style>{`
    .steps-container {
      position: relative;
      margin-top: 40px;
    }

    .step-wrapper {
      position: relative;
    }

    .connector-line {
      position: absolute;
      top: 50%;
      left: 50%; /* start from edge of circle */
      height: 4px;
      background-color: #007bff;
      z-index: 1;
      transform: translateY(-50%);
    }

    /* Make line stretch to next circle */
    .step-wrapper .connector-line {
      width: calc(100% - 55px); /* 55px = circle diameter */
    }
  `}</style>
</Row>


      </Container>

      {/* Background Animation */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CSS */}
      <style>{`
        .refer-bg {
          background: #e6f2ff;
          position: relative;
          overflow: hidden;
        }

        /* floating animated circles */
        .animated-bg span {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.15);
          animation: float 8s linear infinite;
        }

        .animated-bg span:nth-child(1) {
          width: 120px;
          height: 120px;
          left: 10%;
          bottom: -120px;
          animation-delay: 0s;
        }
        .animated-bg span:nth-child(2) {
          width: 180px;
          height: 180px;
          left: 40%;
          bottom: -180px;
          animation-delay: 2s;
        }
        .animated-bg span:nth-child(3) {
          width: 90px;
          height: 90px;
          right: 15%;
          bottom: -90px;
          animation-delay: 4s;
        }
        .animated-bg span:nth-child(4) {
          width: 150px;
          height: 150px;
          right: 35%;
          bottom: -150px;
          animation-delay: 6s;
        }

        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-400px) scale(1.1); opacity: 0.8; }
          100% { transform: translateY(-800px) scale(1); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default ReferFriend;
