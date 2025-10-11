// ChatBot.jsx
import React, { useState } from 'react';

const courses = [
  'Full Stack Development',
  'Data Science',
  'AI & Machine Learning',
  'Cloud Computing',
  'Cybersecurity',
  'UI/UX Design'
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! I am your assistant. How can I help you today?', from: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [formStep, setFormStep] = useState(null);
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendMessage = (msgText) => {
    if (!msgText) return;
    const newMessages = [...messages, { text: msgText, from: 'user' }];
    setMessages(newMessages);
    setTimeout(() => handleBotResponse(msgText.toLowerCase(), newMessages), 500);
    setInput('');
  };

  const handleBotResponse = (text, newMessages) => {
    // Form collection flow
    if (formStep) {
      if (formStep === 'name') {
        setFormData({ ...formData, name: text });
        setFormStep('education');
        setMessages([...newMessages, { text: 'Nice to meet you! What is your highest education qualification?', from: 'bot' }]);
      } else if (formStep === 'education') {
        setFormData({ ...formData, education: text });
        setFormStep('email');
        setMessages([...newMessages, { text: 'Great! Please enter your email:', from: 'bot' }]);
      } else if (formStep === 'email') {
        setFormData({ ...formData, email: text });
        setFormStep('phone');
        setMessages([...newMessages, { text: 'Almost done! Please enter your phone number:', from: 'bot' }]);
      } else if (formStep === 'phone') {
        setFormData({ ...formData, phone: text });
        setFormStep(null);
        setFormSubmitted(true);
        setMessages([...newMessages, { text: 'Thank you! Our career counselors will reach you shortly.', from: 'bot' }]);
        console.log('Form submitted:', { ...formData, phone: text }); // Replace with API call if needed
      }
      return;
    }

    // Keyword responses
    if (text.includes('hello') || text.includes('hi')) {
      setMessages([...newMessages, { text: 'Hi there! How can I assist you?', from: 'bot' }]);
    } else if (text.includes('course')) {
      const courseList = courses.map((c, i) => `${i + 1}. ${c}`).join('\n');
      setMessages([...newMessages, { text: `We offer the following courses:\n${courseList}\nWhich course are you interested in?`, from: 'bot' }]);
      setFormStep('name'); // start form
    } else if (text.includes('callback')) {
      setMessages([...newMessages, { text: 'Sure! Please provide your details below.', from: 'bot' }]);
      setFormStep('name'); // start form
    } else {
      // Fallback for unknown input
      const fallbackText = formSubmitted
        ? 'Please contact our career counselor for more details. Our career counselors will reach you soon.'
        : 'Please submit your details first. Our career counseling team will reach you shortly after that.';
      setMessages([...newMessages, { text: fallbackText, from: 'bot' }]);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, width: 320, zIndex: 9999 }}>
      <button 
        onClick={() => setOpen(!open)} 
        style={{
          background: '#214b75', color: '#fff', border: 'none',
          borderRadius: '50%', width: 50, height: 50, cursor: 'pointer'
        }}
      >
        Chat
      </button>

      {open && (
        <div style={{
          background: '#fff', border: '1px solid #ccc', borderRadius: 8,
          marginTop: 10, padding: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <div style={{ maxHeight: 350, overflowY: 'auto', marginBottom: 10 }}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{
                  textAlign: msg.from === 'user' ? 'right' : 'left',
                  marginBottom: 5,
                  background: msg.from === 'user' ? '#214b75' : '#f0f0f0',
                  color: msg.from === 'user' ? '#fff' : '#000',
                  padding: '5px 10px',
                  borderRadius: 12,
                  display: 'inline-block',
                  maxWidth: '80%',
                  whiteSpace: 'pre-line'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..." 
              style={{ flex: 1, padding: '5px 10px', borderRadius: 4, border: '1px solid #ccc' }}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            />
            <button 
              onClick={() => sendMessage(input)} 
              style={{ background: '#214b75', color: '#fff', border: 'none', borderRadius: 4, padding: '0 10px', cursor: 'pointer' }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
