// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const EnquireForm = require("./routes/EnquireForm");
const HireForm = require("./routes/HireForm");
const ReferForm = require("./routes/ReferForm");
const chatRoutes = require("./routes/chatRoutes");
const leadRoutes = require("./routes/leadRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const liveChatRoutes = require("./routes/LiveChatRoutes");
const liveChatSocket = require("./Socket.io");
const http = require("http");
const { Server } = require("socket.io");


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
app.use("/api/chat", chatRoutes);
app.use("/api/lead", leadRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/livechat", liveChatRoutes);


// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Enquiry API");
});

// ✅ Socket.io setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

liveChatSocket(io);


// Start server
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
