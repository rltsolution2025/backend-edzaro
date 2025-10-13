import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AIChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Edzaro! I'm your virtual assistant. How can I help you today?" },
  ]);

  const [showInitialOptions, setShowInitialOptions] = useState(true);
  const [showFollowUps, setShowFollowUps] = useState(false);
  const [showNextQuestions, setShowNextQuestions] = useState(false);
  const [collectInfo, setCollectInfo] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    course: "",
  });

  // handle first question options
  const handleInitialOption = (option) => {
    let botReply = "";

    if (option === "I am looking to up-skill") {
      botReply = `Edzaro offers several upskilling programs tailored to your career goals. 
We focus on Full Stack Development, QA Automation, Data Analytics, and more.
Our programs emphasize practical, project-based learning with mentor support.`;
    } else if (option === "I am a fresher & looking for my first job") {
      botReply = `We help freshers build industry-ready skills with hands-on training and mock interviews. 
Many students have secured placements through our career support program.`;
    } else if (option === "I am planning to switch my job") {
      botReply = `We specialize in helping professionals transition to tech careers. 
With structured mentorship and real-time projects, our learners achieve smooth career shifts.`;
    } else {
      botReply = `That’s great! You can explore various learning paths based on your goals.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
    setShowInitialOptions(false);
    setShowFollowUps(true);
  };

  // handle follow-up options
  const handleFollowUp = (option) => {
    let botReply = "";

    if (option === "Tell me about your program offering") {
      botReply = `Edzaro provides Full Stack Development, Automation Testing, Data Analytics, and Cloud programs. 
Each course combines live mentorship, hands-on projects, and job readiness modules.`;
    } else if (option === "How do you provide job assistance?") {
      botReply = `Our career support includes resume building, mock interviews, portfolio reviews, and direct placement drives with hiring partners.`;
    } else if (option === "I don't know coding — how could I benefit from you?") {
      botReply = `Edzaro's programs are specifically designed to help individuals from non-IT backgrounds—such as mechanical engineering, customer support, sales, and even the medical field—transition into tech.
Many of our graduates have successfully secured jobs in tech after completing our structured, hands-on learning programs.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
    setShowFollowUps(false);
    setShowNextQuestions(true);
  };

  // handle next set of questions
  const handleNextQuestion = (option) => {
    let botReply = "";

    if (option === "View curriculum of your programs") {
      botReply = `You can view our program curriculums on our Courses page. Each course has detailed modules, project outlines, and mentor-led sessions.`;
    } else if (option === "Tell me about the program offerings.") {
      botReply = `Our programs cover Full Stack Development, QA Automation, Data Analytics, and Cloud Computing — designed for both beginners and working professionals.`;
    } else if (option === "How do you provide job assistance?") {
      botReply = `We offer personalized career guidance, placement training, and connect you with hiring partners to help you land your dream job.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);

    // after last message → ask for user contact info
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Before we proceed, could you please share your details so our team can reach out to you?",
        },
      ]);
      setShowNextQuestions(false);
      setCollectInfo(true);
    }, 800);
  };

  // handle form input
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // submit user details to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // show user info in chat
    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: `Name: ${userData.name}, Email: ${userData.email}, Qualification: ${userData.qualification}, Interested Course: ${userData.course}`,
      },
    ]);

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Thank you for sharing your details! Our counselor will reach out to you soon. Would you like to chat with our live assistant?",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Oops! Something went wrong. Please try again later." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error connecting to server. Please check your backend connection." },
      ]);
    }

    setCollectInfo(false);
  };

  return (
    <div
      className="card shadow-lg position-fixed bottom-0 end-0 m-3"
      style={{ width: "360px", height: "520px", borderRadius: "15px", zIndex: 9999 }}
    >
      <div className="card-header bg-primary text-white fw-bold">
        Edzaro HelpChat
      </div>
      <div
        className="card-body overflow-auto"
        style={{ height: "420px", background: "#f9f9f9" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex mb-2 ${
              msg.from === "bot" ? "justify-content-start" : "justify-content-end"
            }`}
          >
            <div
              className={`p-2 rounded-3 ${
                msg.from === "bot"
                  ? "bg-white text-dark border"
                  : "bg-success text-white"
              }`}
              style={{ maxWidth: "75%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Initial Options */}
        {showInitialOptions && (
          <div className="d-flex flex-column mt-3">
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() => handleInitialOption("I am planning to switch my job")}
            >
              I am planning to switch my job
            </button>
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() =>
                handleInitialOption("I am a fresher & looking for my first job")
              }
            >
              I am a fresher & looking for my first job
            </button>
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() => handleInitialOption("I am looking to up-skill")}
            >
              I am looking to up-skill
            </button>
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() => handleInitialOption("I am only exploring")}
            >
              I am only exploring
            </button>
          </div>
        )}

        {/* Follow-up Questions */}
        {showFollowUps && (
          <div className="d-flex flex-column mt-3">
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() => handleFollowUp("Tell me about your program offering")}
            >
              Tell me about your program offering
            </button>
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() => handleFollowUp("How do you provide job assistance?")}
            >
              How do you provide job assistance?
            </button>
            <button
              className="btn btn-outline-secondary mb-2"
              onClick={() =>
                handleFollowUp("I don't know coding — how could I benefit from you?")
              }
            >
              I don't know coding — how could I benefit from you?
            </button>
          </div>
        )}

        {/* Next Set of Questions */}
        {showNextQuestions && (
          <div className="mt-3">
            <p className="fw-bold">What do you wish to know more?</p>
            <div className="d-flex flex-column">
              <button
                className="btn btn-outline-secondary mb-2"
                onClick={() => handleNextQuestion("View curriculum of your programs")}
              >
                View curriculum of your programs
              </button>
              <button
                className="btn btn-outline-secondary mb-2"
                onClick={() =>
                  handleNextQuestion("Tell me about the program offerings.")
                }
              >
                Tell me about the program offerings.
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleNextQuestion("How do you provide job assistance?")}
              >
                How do you provide job assistance?
              </button>
            </div>
          </div>
        )}

        {/* Contact Info Form */}
        {collectInfo && (
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="phone"
                name="phone"
                placeholder="Your Phone"
                className="form-control"
                value={userData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                className="form-control"
                value={userData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="course"
                placeholder="Interested Course"
                className="form-control"
                value={userData.course}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="btn btn-success w-100" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AIChatBot;
