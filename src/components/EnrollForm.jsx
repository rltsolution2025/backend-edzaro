import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { submitEnquiry } from "../pages/Api/Api";

const EnrollForm = ({ courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await submitEnquiry(formData);
      alert("✅ Thank you! We'll get in touch soon.");
      setFormData({ name: "", email: "", phone: "", agree: false });
    } catch (error) {
      alert(`❌ ${error.message || "Error submitting form."}`);   
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-5 bg-white rounded-3xl shadow-lg">
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone (+91)"
            value={formData.phone}
            onChange={handleChange}
            className="py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </Form.Group>

        <Form.Group className="form-check">
          <Form.Check
            type="checkbox"
            name="agree"
            label="I agree to receive SMS & WhatsApp communications on this number."
            checked={formData.agree}
            onChange={handleChange}
            className="text-muted"
          />
        </Form.Group>

        <Button
          type="submit"
          variant="warning"
          className="w-100 rounded-xl fw-bold py-3 shadow-sm hover:shadow-md transition"
        >
          Book Your Trial
        </Button>
      </Form>

      {/* Extra Styling */}
      <style>{`
        .rounded-3xl {
          border-radius: 1.5rem !important;
        }
        .gap-4 > *:not(:last-child) {
          margin-bottom: 1rem !important;
        }
        .transition {
          transition: all 0.3s ease-in-out;
        }
        .hover\\:shadow-md:hover {
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default EnrollForm;
