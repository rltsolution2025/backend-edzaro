// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const EnquireForm = require("./routes/EnquireForm");
const HireForm = require("./routes/HireForm");
const ReferForm = require("./routes/ReferForm");

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/trialFormDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/enquire", EnquireForm);
app.use("/api/hire", HireForm);
app.use("/api/refer", ReferForm);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Enquiry API");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
