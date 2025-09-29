// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/trialFormDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.post("/api/enquire", EnquireForm)

// Route
app.post("/api/trial", async (req, res) => {
  try {
    const { fullName, email, phone, consent } = req.body;

    // Validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTrial = new Trial({ fullName, email, phone, consent });
    await newTrial.save();

    res.status(201).json({ message: "Trial booked successfully", data: newTrial });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
