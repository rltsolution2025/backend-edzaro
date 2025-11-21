const CallBack = require("../models/CallBack");

// Handle callback request
const handleCallbackRequest = async (req, res) => {
    try {
        const { name, email, phone } = req.body;    
        if (!name || !email || !phone) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newCallback = new CallBack({ name, email, phone });
        await newCallback.save();
        res.status(201).json({ message: "Callback request received", data: newCallback });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { handleCallbackRequest };