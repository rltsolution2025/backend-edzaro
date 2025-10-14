import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

// Add a soft ping sound in your public folder (public/sound.mp3)
const SOUND_URL = "/sound.mp3";

const AIChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome to Edzaro! I'm your virtual assistant. How can I help you today?" },
  ]);
  const [showInitialOptions, setShowInitialOptions] = useState(true);
  const [showFollowUps, setShowFollowUps] = useState(false);
  const [showNextQuestions, setShowNextQuestions] = useState(false);
  const [collectInfo, setCollectInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    course: "",
  });

  const chatEndRef = useRef(null);

  const playSound = () => {
    const audio = new Audio(SOUND_URL);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    playSound();
  }, [messages]);

  // handle first question options
  const handleInitialOption = (option) => {
    let botReply = "";

    if (option === "I am looking to up-skill") {
      botReply = `💡 Edzaro offers several upskilling programs tailored to your career goals. We focus on Full Stack Development, QA Automation, Data Analytics, and more.`;
    } else if (option === "I am a fresher & looking for my first job") {
      botReply = `🚀 We help freshers build industry-ready skills with hands-on training and mock interviews. Many students have secured placements through our career support program.`;
    } else if (option === "I am planning to switch my job") {
      botReply = `🎯 We specialize in helping professionals transition to tech careers with mentorship and real-time projects.`;
    } else {
      botReply = `That's great! You can explore various learning paths based on your goals.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
    setShowInitialOptions(false);
    setShowFollowUps(true);
  };

  const handleFollowUp = (option) => {
    let botReply = "";

    if (option === "Tell me about your program offering") {
      botReply = `📘 We provide Full Stack Development, QA Automation, Data Analytics, and Cloud programs. Each combines live mentorship and job readiness modules.`;
    } else if (option === "How do you provide job assistance?") {
      botReply = `💼 Our career support includes resume building, mock interviews, and placement drives with hiring partners.`;
    } else if (option === "I don't know coding — how could I benefit from you?") {
      botReply = `🧭 Our programs are designed for non-IT learners to transition into tech with step-by-step mentorship and practical projects.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
    setShowFollowUps(false);
    setShowNextQuestions(true);
  };

  const handleNextQuestion = (option) => {
    let botReply = "";

    if (option === "View curriculum of your programs") {
      botReply = `📚 You can view our detailed curriculums on the Courses page — including modules and project outlines.`;
    } else if (option === "Tell me about the program offerings.") {
      botReply = `🎓 We offer Full Stack Development, QA Automation, Data Analytics, and Cloud Computing courses.`;
    } else if (option === "How do you provide job assistance?") {
      botReply = `🤝 We provide personalized guidance and connect you directly with our hiring partners.`;
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "📋 Before we proceed, could you please share your details so our team can reach out to you?",
        },
      ]);
      setShowNextQuestions(false);
      setCollectInfo(true);
    }, 800);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: `👤 Name: ${userData.name}, ✉️ Email: ${userData.email}, 🎓 Qualification: ${userData.qualification}, 📘 Interested Course: ${userData.course}`,
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
          { from: "bot", text: "✅ Thank you! Our counselor will reach out to you soon. Would you like to chat with a live assistant?" },
        ]);
      } else {
        setMessages((prev) => [...prev, { from: "bot", text: "⚠️ Oops! Something went wrong. Please try again later." }]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Error connecting to server. Please check your backend connection." },
      ]);
    }

    setCollectInfo(false);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg"
        style={{
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #1f4b7aff, #1d6c81ff)",
          border: "none",
          color: "white",
          fontSize: "24px",
          zIndex: 10000,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
         <img src='/assets/Chatbot.png' alt="Edzaro AI" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="card position-fixed bottom-0 end-0 m-4 shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 80 }}
            style={{
              width: "360px",
              height: "520px",
              borderRadius: "15px",
              overflow: "hidden",
              zIndex: 9999,
              background: "linear-gradient(180deg, #f0f7ff, #ffffff)",
            }}
          >
            <div
              className="card-header text-white d-flex align-items-center justify-content-between"
              style={{
                background: "linear-gradient(90deg, #007bff, #00c6ff)",
                fontWeight: "bold",
              }}
            >
              Edzaro HelpChat
              <button
                className="btn btn-sm btn-light"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
            </div>

            <div
              className="card-body overflow-auto p-3"
              style={{ height: "420px", background: "rgba(255,255,255,0.85)" }}
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`d-flex mb-2 ${
                    msg.from === "bot"
                      ? "justify-content-start"
                      : "justify-content-end"
                  }`}
                  initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`p-2 rounded-3 shadow-sm ${
                      msg.from === "bot"
                        ? "bg-white text-dark border"
                        : "bg-primary text-white"
                    }`}
                    style={{ maxWidth: "75%" }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef}></div>

              {/* Initial Options */}
              {showInitialOptions && (
                <div className="d-flex flex-column mt-3">
                  {[
                    "I am planning to switch my job",
                    "I am a fresher & looking for my first job",
                    "I am looking to up-skill",
                    "I am only exploring",
                  ].map((opt, i) => (
                    <button
                      key={i}
                      className="btn btn-outline-primary mb-2"
                      onClick={() => handleInitialOption(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Follow-ups */}
              {showFollowUps && (
                <div className="d-flex flex-column mt-3">
                  {[
                    "Tell me about your program offering",
                    "How do you provide job assistance?",
                    "I don't know coding — how could I benefit from you?",
                  ].map((opt, i) => (
                    <button
                      key={i}
                      className="btn btn-outline-primary mb-2"
                      onClick={() => handleFollowUp(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Next Questions */}
              {showNextQuestions && (
                <div className="mt-3">
                  <p className="fw-bold text-secondary">What do you wish to know more?</p>
                  {[
                    "View curriculum of your programs",
                    "Tell me about the program offerings.",
                    "How do you provide job assistance?",
                  ].map((opt, i) => (
                    <button
                      key={i}
                      className="btn btn-outline-primary mb-2"
                      onClick={() => handleNextQuestion(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Form */}
              {collectInfo && (
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {["name", "email", "phone", "qualification", "course"].map(
                    (field, i) => (
                      <div className="mb-2" key={i}>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          placeholder={
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }
                          className="form-control"
                          value={userData[field]}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    )
                  )}
                  <button className="btn btn-primary w-100" type="submit">
                    Submit
                  </button>
                </motion.form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;
