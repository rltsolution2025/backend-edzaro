// controllers/enquiryController.js
const Enquiry = require("../models/enquiry");

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, qualification, course } = req.body;
    if (!name || !email || !phone || !qualification || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEnquiry = await Enquiry.create({ name, email, phone, qualification, course });
    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully!",
      data: newEnquiry,
    });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
};

module.exports = { submitEnquiry };
